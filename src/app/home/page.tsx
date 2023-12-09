'use client'

import { Col, Row } from 'antd'

import Banner from './banner/page'
import { LeadingInnovators } from './leadingInnovators'
import { Feature } from './feature'
import { Fortress } from './fortress'
import { RoadMap } from './roadMap'

export default function Home() {
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
      <Col span={24}>
        <RoadMap />
      </Col>
    </Row>
  )
}
