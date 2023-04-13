'use client'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Typography } from 'antd'

export default async function App() {
  const router = useRouter()

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title>Desig</Typography.Title>
      </Col>
      <Col span={12}>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push('/welcome')}
          block
        >
          Welcome
        </Button>
      </Col>
      <Col span={12}>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push('/about')}
          block
        >
          About
        </Button>
      </Col>
    </Row>
  )
}
