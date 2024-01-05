'use client'

import { Col, Row } from 'antd'

import { useBlogCard } from '../hook/useBlogs'
import BlogCard from './blogCard'

export type NavigationProps = {
  pageIds: string[]
  metadataMap: PageMap
}

export default function ListBlog({ pageIds, metadataMap }: NavigationProps) {
  const { thumbnailIds } = useBlogCard(pageIds, metadataMap)

  return (
    <Row gutter={[24, 24]}>
      {thumbnailIds.slice(0, 3).map((pageId) => (
        <Col key={pageId} xs={24} md={8}>
          <BlogCard pageId={pageId} metadata={metadataMap[pageId]} />
        </Col>
      ))}
    </Row>
  )
}
