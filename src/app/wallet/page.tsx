'use client'
import Image from 'next/image'

import { Col, Row } from 'antd'
import Banner from './banner'
import MultisigJourney from './multisigJourney'
import FeatureCrafted from './featuresCrafted'
import MoreFeature from './moreFeature'
import Attention from './attention'

import './index.scss'
import LIGHT_LEFT from 'static/images/wallet/light-left.png'
import LIGHT_RIGHT from 'static/images/wallet/light-right.png'

export default function WalletPage() {
  return (
    <Row className="wallet-page">
      <Col span={24}>
        <Row>
          <Col className="effect-responsive">
            <Image
              src={LIGHT_LEFT}
              alt=""
              style={{ position: 'absolute', top: -152, left: 0 }}
            />
          </Col>
          <Col span={24}>
            <Banner />
          </Col>
          <Col className="effect-responsive">
            <Image
              src={LIGHT_RIGHT}
              alt=""
              style={{ position: 'absolute', top: -152, right: 0 }}
            />
          </Col>
        </Row>
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
