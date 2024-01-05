import { Metadata } from 'next'
import { ReactNode } from 'react'

import './index.scss'

export const metadata: Metadata = {
  title: 'Desig: The Blockchain-Agnostic Multisig Solution',
  description: 'The Blockchain-Agnostic Multisig Solution',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
