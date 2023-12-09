'use client'

import { Col, Row } from 'antd'
import Banner from './banner'
import MultisigJourney from './multisigJourney'

export default function WalletPage() {
  return (
    <Row gutter={[0, 128]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <MultisigJourney />
      </Col>
    </Row>
  )
}
