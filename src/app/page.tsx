'use client'

import { Col, Row } from 'antd'
import Banner from './banner/page'
import { LeadingInnovators } from './leadingInnovators'
import { Feature } from './feature'
import { Fortress } from './fortress'

export default async function App() {
  return (
    <Row gutter={[0, 128]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <LeadingInnovators />
      </Col>
      <Col span={24}>
        <Feature />
      </Col>
      <Col span={24}>
        <Fortress />
      </Col>
    </Row>
  )
}
