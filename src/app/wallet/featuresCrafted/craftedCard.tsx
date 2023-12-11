'use client'
import { Card, Col, Row, Typography } from 'antd'
import Spline from '@splinetool/react-spline'

type CraftedCardProps = {
  title: string
  desc: string
  url3d: string
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
        <Col>
          <Spline style={{ height: '340px', width: '340px' }} scene={url3d} />
        </Col>
      </Row>
    </Card>
  )
}
