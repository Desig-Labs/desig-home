'use client'
import { Card, Col, Row, Typography } from 'antd'

type JourneyCardProps = {
  title: string
  desc: string
  bg: string
}

export default function JourneyCard({ title, desc, bg }: JourneyCardProps) {
  return (
    <Card
      bodyStyle={{
        width: 490,
        padding: '40px 32px',
        backgroundSize: 'cover',
        background: `url(${bg})`,
      }}
      style={{ height: '100%' }}
      className="ant-card"
    >
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
        <Col span={24}>{desc}</Col>
      </Row>
    </Card>
  )
}
