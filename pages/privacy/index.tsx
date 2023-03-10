import { Col, Row } from 'antd'

import Termly from 'components/policy.mdx'

export default function Policy() {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24} style={{ maxWidth: 640 }}>
        <Termly />
      </Col>
    </Row>
  )
}
