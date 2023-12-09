'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CraftedCard from './craftedCard'

const LIST_CRAFTED = [
  {
    title: 'Social Recovery',
    desc: 'Regain access to your account through your preferred social connections, ensuring a seamless recovery experience.',
    url3d: 'https://prod.spline.design/pTVfBz8Z-nBr0FZ3/scene.splinecode',
  },
  {
    title: 'Staking Aggregator',
    desc: 'Leverage the power of staking with Desig&apos;s built-in aggregator. Get the best returns on your investments without the hassle of manually tracking each staking platform or validator.',
    url3d: 'https://prod.spline.design/1w0XKFpb7FuoDr7i/scene.splinecode',
  },
  {
    title: 'Cashflow Management',
    desc: 'Take control of your finances with ease. Organize transactions by category, create custom categories, and track your expenses visually with insightful pie charts.',
    url3d: 'https://prod.spline.design/b9On7vDzG0JnGrDy/scene.splinecode',
  },
]

export default function FeatureCrafted() {
  return (
    <MaxWidthLayout>
      <Row gutter={[0, 80]} justify="start">
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
