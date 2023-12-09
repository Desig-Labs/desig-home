'use client'
import { Col, Row, Typography } from 'antd'

type JourneyCardProps = {
  title: string
  desc: string
  bg: string
}

export default function JourneyCard({ title, desc, bg }: JourneyCardProps) {
  return (
    <Row
      gutter={[0, 24]}
      className="journey-card"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Col span={24}>
        <Typography.Title level={3}>{title}</Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Text style={{ color: '#A0A0A1' }}>{desc}</Typography.Text>
      </Col>
    </Row>
  )
}
