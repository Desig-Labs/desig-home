import { useRouter } from 'next/router'

import { Button, Col, Row, Typography } from 'antd'

export default function Home() {
  const router = useRouter()

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Text>Home</Typography.Text>
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
