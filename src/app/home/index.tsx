import { Col, Row } from 'antd'
import Content from './content'
import Navigation from './navigation'

export default function Home() {
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
