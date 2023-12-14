'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import JourneyCard from './journeyCard'

import 'swiper/css'

const LIST_JOURNEY = [
  {
    title: 'Omnichain Asset Movement',
    desc: 'Unlock the power to move your assets effortlessly across vaults and chains. Navigate the blockchain world with zero restrictions.',
    bg: '/journey/bg-asset.png',
  },
  {
    title: 'Universal Gas Settlement',
    desc: 'Say goodbye to limitations by paying gas fees with any native token, ensuring flexibility and convenience in your transactions.',
    bg: '/journey/bg-gas.png',
  },
  {
    title: 'Gasless Vault Control',
    desc: 'Say goodbye to vault management costs – manage your assets directly from shared vaults.',
    bg: '/journey/bg-vault.png',
  },
  {
    title: 'Effortless Multichain Management',
    desc: 'Seamlessly grow and manage shared funds across diverse blockchains in one simple app.',
    bg: '/journey/bg-effortless.png',
  },
  {
    title: 'Unified Wallet Address',
    desc: 'Simplifying multichain operations through a singular wallet address for all EVM-compatible chains',
    bg: '/journey/bg-wallet.png',
  },
  {
    title: 'Stay in the Know, Anywhere',
    desc: 'Get instant, real-time alerts on all multi-sig activities, whether you’re on your mobile or PC.',
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
      <Row className="section-container" justify="start">
        <Col span={20}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                Streamline your multisig journey, the{' '}
                <span style={{ paddingRight: 4 }} className="gradient-text">
                  Desig{' '}
                </span>
                way
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text className="description" type="secondary">
                Unlocking omnichain control through user-centric wallet design
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            style={{
              overflow: 'unset',
              height: '100%',
            }}
          >
            {LIST_JOURNEY.map(({ title, desc, bg }) => (
              <SwiperSlide style={{ width: 'unset' }} key={title}>
                <JourneyCard title={title} desc={desc} bg={bg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
