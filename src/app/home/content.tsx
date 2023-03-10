import { Col, Row, Typography } from 'antd'

export default function Content() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title level={1} style={{ fontSize: 74 }}>
          Coming Soon
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Title
          onClick={() => window.open('mailto:hi@desig.io', '_blank')}
          style={{ cursor: 'pointer' }}
          level={5}
        >
          👋 hi@desig.io
        </Typography.Title>
      </Col>
    </Row>
  )
}
