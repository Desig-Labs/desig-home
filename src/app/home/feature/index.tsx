'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import FeatureImg from 'static/images/feature/features.png'
import Gas from 'static/images/feature/gas.png'
import Management from 'static/images/feature/management.png'
import Mobile from 'static/images/feature/mobile.png'
import Safety_Box from 'static/images/feature/safety-box.png'
import CopyImg from 'static/images/feature/copy.png'
import Ketsat from 'static/images/feature/ketsat.png'
import Pig from 'static/images/feature/pig.png'

import './index.scss'

const FEATURES = [
  {
    index: 1,
    title: 'Effortless Omnichain Management',
    icon: Management,
    maxWidth: 'unset',
    desc: 'Store, manage, and grow your shared funds in one place. One tap to navigate your assets across various blockchains and vaults.',
  },
  {
    index: 2,
    title: 'Key-less Nature. Fearless Future',
    icon: FeatureImg,
    maxWidth: 'unset',
    desc: 'Secure your funds with four layers of high-level, battle-tested technology. Stay keyless with MPC-TSS and keep your data encrypted with Homomorphic Encryption, verified by Zero Knowledge Proof.',
  },
  {
    index: 3,
    title: 'Gas-less. Fee-less. Worry Less',
    icon: Gas,
    maxWidth: 'unset',
    desc: 'Spend not a penny on approvals and requests. Manage your funds with zero cost. Pay transaction fees directly from your shared vault.',
  },
  {
    index: 4,
    title: 'Holistic Cashflow Control',
    icon: Ketsat,
    maxWidth: 'unset',
    desc: 'Effortlessly track, customize, and analyze cash flows with tailored reports. Access period-specific, chain-based financial analyses and year-over-year growth report with interactive charts.',
  },
  {
    index: 5,
    title: 'Insight-driven Swap',
    icon: CopyImg,
    maxWidth: 'unset',
    desc: 'Maximize efficiency with our Data-Powered Swap using top aggregators across 16 chains. Our innovative solution optimizes conversion costs and boosts capital efficiency for higher returns on every transaction.',
  },
  {
    index: 6,
    title: 'Private Matter Stay Private',
    icon: Safety_Box,
    maxWidth: 'unset',
    desc: 'Protect personal on-chain identity from attackers. Keep your multisig actions hidden from the world, accessible only to you.',
  },
  {
    index: 7,
    title: 'Algorithmic Staking Aggregator',
    icon: Pig,
    maxWidth: 200,
    desc: 'Maximize returns with insights on validators and staking platforms on a user-friendly dashboard with tailored recommendations. One-click staking provides real-time data and an Expert Scorecard for informed decisions.',
  },
  {
    index: 8,
    title: 'Mobile-First Design',
    icon: Mobile,
    maxWidth: 'unset',
    desc: 'Bring your fund along anytime, anywhere. Access and manage your financial system with one single tap.',
  },
]
import './index.scss'
import { FeatureCard } from './featureCard'
export const Feature = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[80, 80]} justify="center">
        <Col>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Typography.Title
                level={2}
                className="gradient-text gradient-feature"
              >
                Secure. Private. Effortless.
              </Typography.Title>
            </Col>
            <Col style={{ textAlign: 'center' }}>
              <Typography.Text className="description" type="secondary">
                Harmonizing{' '}
                <span className="color-white" style={{ fontWeight: 700 }}>
                  Smart
                </span>{' '}
                technology and{' '}
                <span className="color-white" style={{ fontWeight: 700 }}>
                  User-centric
                </span>{' '}
                design for Multisig excellence
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={[24, 24]} justify="center" className="grid-layout">
            {FEATURES.map(({ title, icon, maxWidth, index, desc }) => (
              <Col key={index} className={`item-grid item${index}`}>
                <FeatureCard
                  title={title}
                  icon={icon}
                  maxWidth={maxWidth}
                  desc={desc}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
