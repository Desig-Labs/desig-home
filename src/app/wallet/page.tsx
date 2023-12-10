'use client'

import { Col, Row } from 'antd'
import Banner from './banner'
import MultisigJourney from './multisigJourney'
import FeatureCrafted from './featuresCrafted'
import MoreFeature from './moreFeature'
import Attention from './attention'

import './index.scss'

export default function WalletPage() {
  return (
    <Row gutter={[0, 192]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <MultisigJourney />
      </Col>
      <Col span={24}>
        <FeatureCrafted />
      </Col>
      <Col span={24}>
        <MoreFeature />
      </Col>
      <Col span={24}>
        <Attention />
      </Col>
    </Row>
  )
}
