'use client'
import Link from 'next/link'
import dayjs from 'dayjs'

import { Col, Card, Row, Typography, Space, Divider, Image } from 'antd'
import Tags from '../tags'

import { normalizePageTitle } from 'app/api/blog/utils'

export type BannerCardProps = {
  pageId: string
  metadata: PageMetadata
}

export default function BannerCard({
  pageId,
  metadata: { publishedAt, title, description, thumbnail },
}: BannerCardProps) {
  return (
    <Link href={`/blog/${normalizePageTitle(title)}/${pageId}`}>
      <Card
        className="banner-card"
        cover={<Image preview={false} alt={title} src={thumbnail} />}
        bodyStyle={{ padding: 0 }}
      >
        <Row gutter={[0, 16]} className="banner-body">
          <Col span={24} className="timeline">
            <Space size={16}>
              <Tags pageId={pageId} />
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
    </Link>
  )
}
