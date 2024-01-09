'use client'
import { TAGS, useBlogCard } from './hook/useBlogs'
import { Col, Row, Typography } from 'antd'
import Link from 'next/link'

export type NavigationProps = {
  pageIds: string[]
  metadataMap: PageMap
}

export default function Navigation({ pageIds, metadataMap }: NavigationProps) {
  const { tag: activeTag } = useBlogCard(pageIds, metadataMap)

  return (
    <Row gutter={[12, 12]} align="middle" className="blog-tabs" wrap>
      {TAGS.map(({ title, tag }) => (
        <Col key={tag}>
          <Link
            className={tag === activeTag ? 'active-tab' : 'tab'}
            href={{
              pathname: '/blog',
              query: tag ? { tag } : {},
            }}
          >
            <Typography.Text>{title}</Typography.Text>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
