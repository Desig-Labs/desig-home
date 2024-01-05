'use client'
import Image from 'next/image'
import dayjs from 'dayjs'

import { Col, Card, Row, Typography, Tag, Space, Divider } from 'antd'

export type BannerCardProps = {
  pageId: string
  metadata: PageMetadata
}

export default function BannerCard({
  pageId,
  metadata: { publishedAt, tags, title, description, thumbnail },
}: BannerCardProps) {
  return (
    <Card
      className="banner-card"
      cover={<Image width={429} height={276} alt={title} src={thumbnail} />}
      bodyStyle={{ padding: 0 }}
    >
      <Row gutter={[0, 16]}>
        <Col span={24} style={{ marginBottom: 32 }}>
          <Space size={16}>
            <Space size={8}>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  color="purple"
                  style={{
                    color: '#E3B4FA',
                    padding: '2px 10px',
                    marginInlineEnd: 0,
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
            <Divider
              type="vertical"
              style={{ height: '2em', borderColor: '#404043' }}
            />
            <Typography.Text style={{ fontWeight: 400, color: '#A0A0A1' }}>
              {dayjs(publishedAt).format('MMM DD, YYYY')}
            </Typography.Text>
          </Space>
        </Col>
        <Col span={24}>
          <Typography.Title level={3}>{title}</Typography.Title>
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
