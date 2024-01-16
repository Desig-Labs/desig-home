import { ReactNode } from 'react'
import { ResolvingMetadata } from 'next'
import Image from 'next/image'

import { getDatabase } from 'app/api/service'
import { normalizePageTitle } from 'app/api/utils'
import { getPageIdBySlug } from '../hook/useBlogs'

import '../index.scss'
import 'react-notion-x/src/styles.css'
import ellipseBottom from 'static/images/blogs/ellips-bottom.png'

type Props = {
  params: {
    slug: string
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
      slug: normalizePageTitle(metadataMap[pageId].slug),
      pageId,
      title: normalizePageTitle(metadataMap[pageId].title),
    }
  })
  return params
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  const { metadataMap } = await getDatabase()

  const { slug } = params
  const pageId = getPageIdBySlug(slug, metadataMap)
  const metadata = metadataMap[pageId]

  const prevThumbnails = (await parent).openGraph?.images || []
  if (!metadata) return {}

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
