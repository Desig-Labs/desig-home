'use client'
import { ReactNode } from 'react'

import { ConfigProvider, Layout } from 'antd'

import 'styles/index.scss'
import { generateTheme } from 'styles/theme'

export enum Infix {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
  xxl = 1600,
}

/**
 * Provider
 */

export default function UiProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={generateTheme()}>
      <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
        {children}
      </Layout>
    </ConfigProvider>
  )
}
