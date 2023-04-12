import { ReactNode, useEffect } from 'react'
import { create } from 'zustand'

import { Col, ConfigProvider, Layout, Row } from 'antd'

import { generateTheme } from 'styles/theme'

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

export const useUiStore = create<UiStore>()((set) => ({
  infix: getInfix(0),
  width: 0,
  setWidth: (width: number) => set({ width, infix: getInfix(width) }),
  theme: 'light',
  setTheme: (theme: Theme) => set({ theme }),
}))

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

  // Listen theme events
  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])
  // Listen window events
  useEffect(() => {
    const handleEvent = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleEvent)
    return () => window.removeEventListener('resize', handleEvent)
  }, [setWidth])

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
