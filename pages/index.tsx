import { Col, Row } from 'antd'
import Content from 'components/welcome/content'
import Navigation from 'components/welcome/navigation'

export default function Main() {
  return (
    <Row gutter={[24, 128]}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Content />
      </Col>
      <Col span={24}>
        <Navigation />
      </Col>
    </Row>
  )
}
