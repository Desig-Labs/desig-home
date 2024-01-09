import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { getDatabase } from 'app/api/blog/service'
import { normalizePageTitle } from 'app/api/blog/utils'

import './index.scss'
import 'react-notion-x/src/styles.css'

export const metadata: Metadata = {
  title: 'Desig: The Blockchain-Agnostic Multisig Solution',
  description: 'The Blockchain-Agnostic Multisig Solution',
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>
}

export async function generateStaticParams() {
  const { pageIds, metadataMap } = await getDatabase()

  if (!pageIds || !metadataMap) return
  const params = pageIds.map((pageId) => ({
    pageId,
    title: normalizePageTitle(metadataMap[pageId].title),
  }))
  return params
}
