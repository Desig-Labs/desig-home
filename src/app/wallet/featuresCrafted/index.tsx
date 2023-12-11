'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CraftedCard from './craftedCard'

import SOCIAL_RECOVERY from 'static/images/wallet/crafted/social-recovery.png'
import STAKING from 'static/images/wallet/crafted/staking.png'
import CASHFLOW from 'static/images/wallet/crafted/cashflow.png'

const LIST_CRAFTED = [
  {
    title: 'Social Recovery',
    desc: 'Regain access to your account through your preferred social connections, ensuring a seamless recovery experience.',
    url3d: SOCIAL_RECOVERY,
  },
  {
    title: 'Staking Aggregator',
    desc: 'Leverage the power of staking with Desig&apos;s built-in aggregator. Get the best returns on your investments without the hassle of manually tracking each staking platform or validator.',
    url3d: STAKING,
  },
  {
    title: 'Cashflow Management',
    desc: 'Take control of your finances with ease. Organize transactions by category, create custom categories, and track your expenses visually with insightful pie charts.',
    url3d: CASHFLOW,
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
              <Typography.Text style={{ fontSize: 20 }} type="secondary">
                See how Desig transform the digital asset management world for
                teams.
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
