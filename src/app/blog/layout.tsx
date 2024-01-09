import { Metadata } from 'next'
import { ReactNode } from 'react'
import Image from 'next/image'

import ellipseBottom from 'static/images/blogs/ellips-bottom.png'

import './index.scss'

export const metadata: Metadata = {
  title: 'Desig: The Blockchain-Agnostic Multisig Solution',
  description: 'The Blockchain-Agnostic Multisig Solution',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="blog-page">
      <Image src={ellipseBottom} alt="light" className="ellipse-bottom" />
      {children}
    </div>
  )
}
