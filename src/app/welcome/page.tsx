'use client'

import { useRouter } from 'next/navigation'

import { Button, Col, Row, Typography } from 'antd'

export default function Welcome() {
  const router = useRouter()

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title>Welcome</Typography.Title>
      </Col>
      <Col span={24}>
        <Button size="large" onClick={() => router.push('')} block>
          Back
        </Button>
      </Col>
    </Row>
  )
}
