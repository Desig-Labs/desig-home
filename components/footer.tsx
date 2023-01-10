import { Col, Row, Typography } from 'antd'

export default function Footer() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Text type="secondary">
          Desig © 2023, All Rights Reserved.
        </Typography.Text>
      </Col>
    </Row>
  )
}
