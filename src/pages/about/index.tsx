import { useRouter } from 'next/router'

import { Button, Col, Row, Typography } from 'antd'

export default function About() {
  const router = useRouter()

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title>About</Typography.Title>
      </Col>
      <Col span={24}>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push('/')}
          block
        >
          Back
        </Button>
      </Col>
    </Row>
  )
}
