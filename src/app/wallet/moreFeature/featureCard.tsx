'use client'
import Image, { StaticImageData } from 'next/image'

import { Card, Col, Row, Typography } from 'antd'

type CraftedCardProps = {
  title: string
  desc: string
  img: StaticImageData
}

export default function FeatureCard({ title, desc, img }: CraftedCardProps) {
  return (
    <Card
      cover={<Image width={318} height={238} alt={title} src={img} />}
      className="feature-card"
    >
      <Row gutter={[0, 12]}>
        <Col span={24}>
          <Typography.Title level={4}>{title}</Typography.Title>
        </Col>
        <Col span={24}>
          <Typography.Text style={{ color: '#A0A0A1', fontSize: '16px' }}>
            {desc}
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  )
}
