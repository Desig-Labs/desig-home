'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CraftedCard from './craftedCard'

import SWAP from 'static/images/wallet/crafted/swap.png'
import STAKING from 'static/images/wallet/crafted/staking.png'
import CASHFLOW from 'static/images/wallet/crafted/cashflow.png'

const LIST_CRAFTED = [
  {
    title: 'Cashflow Management',
    desc: 'Effortlessly track, customize, and analyze cash flows with tailored reports. Access period-specific, chain-based financial analyses and year-over-year growth report with interactive charts.',
    url3d: CASHFLOW,
  },
  {
    title: 'Staking Aggregator',
    desc: 'Maximize returns with insights on validators and staking platforms on a user-friendly dashboard with tailored recommendations. One-click staking provides real-time data and an Expert Scorecard for informed decisions.',
    url3d: STAKING,
  },

  {
    title: 'Intel-driven Swap',
    desc: 'Maximize efficiency with our Data-Powered Swap using top aggregators across 16 chains. Our innovative solution optimizes conversion costs and boosts capital efficiency for higher returns on every transaction.',
    url3d: SWAP,
  },
]

export default function FeatureCrafted() {
  return (
    <MaxWidthLayout>
      <Row className="section-container" justify="start">
        <Col span={20}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                <span className="gradient-text">Features crafted </span>
                with you in mind
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text className="description" type="secondary">
                More than safekeeping: Grow your wealth with Desig&apos;s Smart
                Finance features.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            {LIST_CRAFTED.map(({ title, desc, url3d }) => (
              <Col span={24} key={title}>
                <CraftedCard title={title} desc={desc} url3d={url3d} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
