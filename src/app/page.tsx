'use client'

import { Col, Row } from 'antd'
import Home from './home'

export default async function App() {
  return (
    <Row>
      <Col span={24}>
        <Home />
      </Col>
    </Row>
  )
}
