import { ReactNode } from 'react'
import { ResolvingMetadata } from 'next'
import Image from 'next/image'

import { getDatabase } from 'app/api/service'
import { normalizePageTitle } from 'app/api/utils'

import '../../index.scss'
import 'react-notion-x/src/styles.css'
import ellipseBottom from 'static/images/blogs/ellips-bottom.png'

type Props = {
  params: {
    pageId: string
    title: string
  }
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="details-page">
      <Image src={ellipseBottom} alt="light" className="ellipse-bottom" />
      {children}
    </div>
  )
}

export async function generateStaticParams() {
  const { pageIds, metadataMap } = await getDatabase()
  const params = pageIds.map((pageId) => {
    return {
      pageId,
      title: normalizePageTitle(metadataMap[pageId].title),
      metadata: metadataMap[pageId],
    }
  })
  return params
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  const { pageId } = params
  const { metadataMap } = await getDatabase()
  const metadata = metadataMap[pageId]

  const prevThumbnails = (await parent).openGraph?.images || []

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: [metadata.thumbnail, ...prevThumbnails],
      title: metadata.title,
      description: metadata.description,
    },
    twitter: {
      images: [metadata.thumbnail, ...prevThumbnails],
      title: metadata.title,
      description: metadata.description,
    },
  }
}
