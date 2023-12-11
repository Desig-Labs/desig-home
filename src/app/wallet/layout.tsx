import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desig: The Blockchain-Agnostic Multisig Solution',
  description: 'The Blockchain-Agnostic Multisig Solution',
}

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
