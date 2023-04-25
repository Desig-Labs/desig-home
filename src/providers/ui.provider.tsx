'use client'
import { ReactNode, useEffect } from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'
import { useWindowSize } from 'react-use'

import { Col, ConfigProvider, Layout, Row } from 'antd'

import 'styles/index.scss'
import { generateTheme } from 'styles/theme'
import { env } from 'configs/env'

export enum Infix {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600,
}

const getInfix = (width: number): Infix => {
  if (width >= Infix.xxl) return Infix.xxl
  if (width >= Infix.xl) return Infix.xl
  if (width >= Infix.lg) return Infix.lg
  if (width >= Infix.md) return Infix.md
  if (width >= Infix.sm) return Infix.sm
  return Infix.xs
}

const getTheme = (): Theme => {
  return 'light'
  // if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  // return 'dark'
}

/**
 * Store
 */

export type UiStore = {
  infix: Infix
  width: number
  setWidth: (width: number) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useUiStore = create<UiStore>()(
  devtools(
    persist(
      (set) => ({
        infix: getInfix(window.innerWidth),
        width: window.innerWidth,
        setWidth: (width: number) =>
          set({ width, infix: getInfix(width) }, false, 'setWidth'),
        theme: getTheme(),
        setTheme: (theme: Theme) => set({ theme }, false, 'setTheme'),
      }),
      {
        name: 'ui',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: 'ui',
      enabled: env === 'development',
    },
  ),
)

/**
 * Hook
 */
export const useWidth = () => {
  return useUiStore(({ width, infix, setWidth }) => ({
    width,
    infix,
    setWidth,
  }))
}
export const useTheme = () => {
  return useUiStore(({ theme, setTheme }) => ({ theme, setTheme }))
}

/**
 * Provider
 */

export default function UiProvider({ children }: { children: ReactNode }) {
  const { setWidth } = useWidth()
  const { theme } = useTheme()
  const { width } = useWindowSize()

  // Listen theme events
  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])
  // Listen window events
  useEffect(() => {
    setWidth(width)
  }, [width, setWidth])

  return (
    <ConfigProvider theme={generateTheme(theme)}>
      <Layout style={{ padding: 24, minHeight: '100vh' }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={22} xl={18}>
            {children}
          </Col>
        </Row>
      </Layout>
    </ConfigProvider>
  )
}
