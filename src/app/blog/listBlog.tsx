'use client'
import { useState } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Col, Row, Card, Typography, Space, Divider, Button, Image } from 'antd'
import Tags from './tags'

import { LIMIT, useBlogCard } from './hook/useBlogs'
import { normalizePageTitle } from 'app/api/utils'

export type ListBlogProps = {
  category: string
  pageIds: string[]
  metadataMap: PageMap
}

export default function ListBlog({
  pageIds,
  metadataMap,
  category,
}: ListBlogProps) {
  const [visible, setVisible] = useState(1)
  const { total, thumbnailIds } = useBlogCard(
    pageIds,
    metadataMap,
    category,
    visible,
  )

  const readMore = () => {
    setVisible(visible + 1)
  }

  return (
    <Row gutter={[24, 48]}>
      {thumbnailIds.map((pageId) => (
        <Col key={pageId} xs={24} md={8}>
          <BlogCard pageId={pageId} metadata={metadataMap[pageId]} />
        </Col>
      ))}
      {total > visible * LIMIT && (
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button className="btn-read-more" size="large" onClick={readMore}>
            Read More
          </Button>
        </Col>
      )}
    </Row>
  )
}

export type BlogCardProps = {
  pageId: string
  metadata: PageMetadata
}

export function BlogCard({
  pageId,
  metadata: { publishedAt, title, description, thumbnail },
}: BlogCardProps) {
  return (
    <Link href={`/blog/${normalizePageTitle(title)}/${pageId}`}>
      <Card
        cover={
          <Image
            preview={false}
            alt={title}
            src={thumbnail}
            style={{ objectFit: 'cover' }}
          />
        }
        className="blog-card"
        bodyStyle={{ padding: 0 }}
      >
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Space size={16}>
              <Tags pageId={pageId} />
              <Divider
                type="vertical"
                style={{ height: 20, borderColor: '#404043' }}
              />
              <Typography.Text style={{ fontWeight: 400, color: '#A0A0A1' }}>
                {dayjs(publishedAt).format('MMM DD, YYYY')}
              </Typography.Text>
            </Space>
          </Col>
          <Col span={24}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text style={{ color: '#A0A0A1' }}>
              {description}
            </Typography.Text>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}
