import { ReactNode, useEffect } from 'react'
import { create } from 'zustand'

import { Col, ConfigProvider, Layout, Row } from 'antd'
import Splash from 'components/splash'

import 'static/styles/index.scss'
import { generateTheme } from 'static/styles/theme'

export enum Infix {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600,
}

const getInfix = (): Infix => {
  const width = window.innerWidth
  if (width >= Infix.xxl) return Infix.xxl
  if (width >= Infix.xl) return Infix.xl
  if (width >= Infix.lg) return Infix.lg
  if (width >= Infix.md) return Infix.md
  if (width >= Infix.sm) return Infix.sm
  return Infix.xs
}

const getTheme = (): Theme => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
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
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useUiStore = create<UiStore>()((set) => ({
  infix: getInfix(),
  width: window.innerWidth,
  setWidth: (width: number) => set({ width, infix: getInfix() }),
  theme: getTheme(),
  setTheme: (theme: Theme) => set({ theme }),
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
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
export const useLoading = () => {
  return useUiStore(({ loading, setLoading }) => ({ loading, setLoading }))
}

/**
 * Provider
 */

export default function UiProvider({ children }: { children: ReactNode }) {
  const { setWidth } = useWidth()
  const { theme } = useTheme()
  const { loading } = useLoading()

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
      <Splash open={loading} />
    </ConfigProvider>
  )
}
