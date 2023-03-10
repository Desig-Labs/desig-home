import { Col, Row, Typography } from 'antd'

export default function Content() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title level={1} style={{ fontSize: 96 }}>
          Coming Soon
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Link
          href="mailto:hi@desig.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          👋 hi@desig.io
        </Typography.Link>
      </Col>
    </Row>
  )
}
