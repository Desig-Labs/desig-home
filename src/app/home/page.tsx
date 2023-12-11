'use client'

import { Col, Row } from 'antd'

import { LeadingInnovators } from './leadingInnovators'
import { Feature } from './feature'
import { Fortress } from './fortress'
import { RoadMap } from './roadMap'
import { FutureOfMultisig } from './futureOfMultisig'
import Banner from './banner'

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
      <Col span={24}>
        <FutureOfMultisig />
      </Col>
    </Row>
  )
}
