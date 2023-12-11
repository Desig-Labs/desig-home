'use client'
import Image, { StaticImageData } from 'next/image'

import { Card, Col, Row, Typography } from 'antd'

type CraftedCardProps = {
  title: string
  desc: string
  url3d: StaticImageData
}

export default function CraftedCard({ title, desc, url3d }: CraftedCardProps) {
  return (
    <Card className="crafted-card">
      <Row
        gutter={[24, 24]}
        className="item-responsive"
        align="middle"
        justify="space-between"
      >
        <Col xs={24} md={12}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={3}>{title}</Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text style={{ color: '#A0A0A1' }}>
                {desc}
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Image
            style={{ width: '100%', height: '100%' }}
            alt={title}
            src={url3d}
          />
        </Col>
      </Row>
    </Card>
  )
}
