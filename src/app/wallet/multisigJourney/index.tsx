'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import JourneyCard from './journeyCard'

const LIST_JOURNEY = [
  {
    title: 'Effortless Multichain Management',
    desc: 'Seamlessly grow and manage shared funds across diverse blockchains in one simple app.',
    bg: '/journey/bg-effortless.png',
  },
  {
    title: 'Zero-Cost Transactions',
    desc: 'Say goodbye to gas fees and transaction costs – manage your assets directly from shared vaults.',
    bg: '/journey/bg-zero-cost.png',
  },
  {
    title: 'Swift Vault Setup',
    desc: 'Create multi-chain vaults in under 5 minutes with 4 simple steps.',
    bg: '/journey/bg-vault.png',
  },
  {
    title: 'Mobile-First Accessibility',
    desc: 'Your finances are at your fingertips with our intuitive mobile app designed for your convenience.',
    bg: '/fortress/bg-mobile.png',
  },
  {
    title: 'Stay in the Know, Anywhere',
    desc: 'Get instant, real-time alerts on all multi-sig activities, whether you&apos;re on your mobile or PC.',
    bg: '/journey/bg-stay.png',
  },
  {
    title: 'Security First',
    desc: 'Your assets are protected by cutting-edge technology like MPC-TSS and Homomorphic Encryption, securing your financial future with confidence.',
    bg: '/journey/bg-security.png',
  },
]

export default function MultisigJourney() {
  return (
    <MaxWidthLayout>
      <Row gutter={[0, 80]} justify="start">
        <Col span={20}>
          <Row gutter={[0, 16]}>
            <Col>
              <Typography.Title level={2}>
                Empower your{' '}
                <span style={{ paddingRight: 4 }} className="gradient-text">
                  multi-sig journey
                </span>
                , the Desig way
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 20 }} type="secondary">
                See how Desig transform the digital asset management world for
                teams.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]} wrap={false}>
            {LIST_JOURNEY.map(({ title, desc, bg }) => (
              <Col key={title}>
                <JourneyCard title={title} desc={desc} bg={bg} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
