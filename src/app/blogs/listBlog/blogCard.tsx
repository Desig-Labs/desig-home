'use client'
import Image from 'next/image'
import dayjs from 'dayjs'

import { Col, Row, Card, Typography, Space, Tag, Divider } from 'antd'

export type BlogCardProps = {
  pageId: string
  metadata: PageMetadata
}

export default function BlogCard({
  pageId,
  metadata: { publishedAt, tags, title, description, thumbnail },
}: BlogCardProps) {
  return (
    <Card
      cover={<Image width={319} height={180} alt={title} src={thumbnail} />}
      className="blog-card"
      bodyStyle={{ padding: 0 }}
    >
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Space size={16}>
            <Space size={8}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  color="purple"
                  style={{
                    color: '#E3B4FA',
                    padding: '2px 8px',
                    marginInlineEnd: 0,
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
            <Divider
              type="vertical"
              style={{ height: '1.2em', borderColor: '#404043' }}
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
  )
}
