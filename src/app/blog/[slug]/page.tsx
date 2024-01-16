'use client'
import { NotionRenderer } from 'react-notion-x'
import { Tweet } from 'react-tweet'

import Hero from './hero'
import { Equation } from './equation'
import PageCollection from './collection'
import RecommendBlogs from './recommendBlogs'
import { Skeleton } from 'antd'

import { useBlogPage, useBlogs, getPageIdBySlug } from 'app/blog/hook/useBlogs'

export default function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const {
    data: { metadataMap },
  } = useBlogs()
  const pageId = getPageIdBySlug(slug, metadataMap)
  const {
    data: { map, recommends },
  } = useBlogPage(pageId)

  if (!map || !recommends || !metadataMap) return <Skeleton active />

  return (
    <NotionRenderer
      recordMap={map}
      fullPage={true}
      header={null}
      darkMode
      className="body-blog-details"
      components={{
        Header: () => <Hero pageId={pageId} metadataMap={metadataMap} />,
        Collection: () => <PageCollection pageId={pageId} />,
        Tweet,
        Equation,
      }}
      footer={<RecommendBlogs pageIds={recommends} />}
    />
  )
}
