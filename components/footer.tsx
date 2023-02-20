import { Col, Row, Typography } from 'antd'

export default function Footer() {
  return (
    <Row gutter={[24, 24]} style={{ marginTop: 64 }}>
      <Col span={24}>
        <p style={{ opacity: 0.5 }}>Desig © 2023, All Rights Reserved.</p>
      </Col>
    </Row>
  )
}
