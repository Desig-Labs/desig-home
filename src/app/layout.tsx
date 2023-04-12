import { Metadata } from 'next'
import { ReactNode } from 'react'

import UiProvider from 'providers/ui.provider'
import Header from './header'
import Footer from './footer'

import 'static/styles/index.scss'

export const metadata: Metadata = {
  title: 'Desig',
  description: 'Desig x NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <UiProvider>
          <Header />
          {children}
          <Footer />
        </UiProvider>
      </body>
    </html>
  )
}
