'use client'
import Link from 'next/link'

import { Button, Col, Row, Space, Typography } from 'antd'
import { Ripple } from 'components/splash'
import { NavigationCard } from 'components/cards/navigation'
import IonIcon from 'components/ionicon'

import { twitter } from 'configs/socials.constant'
import styles from './index.module.scss'

const naviagtors = [
  {
    title: 'Core',
    url: 'https://www.npmjs.com/package/@desig/core',
    description:
      'Find in-depth information about Desig Core, which contains the main crypto algorithms for the protocol.',
  },
  {
    title: 'Docs',
    url: 'https://docs.desig.io/',
    description:
      'Learn about Desig in the well-explained document, or also find the whitepaper, and the yellowpaper.',
  },
  {
    title: '@desig/web3',
    url: 'https://web3.desig.io/',
    description:
      'Discover and deploy your projects on the blockchain-agnostic multisig solution with a comprehensive web3 library.',
  },
  {
    title: 'Infrastructure',
    url: 'http://infra.desig.io/',
    description:
      'Wanna become a validator, aka a contributor, aka a node in the Desig Infra? You can do it in seconds here!',
  },
]

export default async function App() {
  return (
    <Row gutter={[24, 128]}>
      <Col xs={24} md={12}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Space>
              <Button size="large">Coming Soon 🚀</Button>
              <Button
                size="large"
                type="primary"
                icon={<IonIcon name="logo-twitter" />}
                href={twitter}
                target="_blank"
              >
                @DesigLabs
              </Button>
            </Space>
          </Col>
          <Col span={24}>
            <Typography.Title style={{ fontSize: 112 }}>Desig</Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Title type="secondary" style={{ fontSize: 36 }}>
              The blockchain-agnostic multisig solution.
            </Typography.Title>
          </Col>
          <Col span={24} style={{ marginTop: 128 }}>
            <Space>
              <Ripple />
              <Link
                href="#desig-go"
                style={{ position: 'relative', left: -52, top: -6 }}
                scroll={false}
              >
                <Typography.Title level={5}>
                  PREPARE FOR THE MOON 🌕
                </Typography.Title>
              </Link>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12}>
        <div className={styles['gradient-container']}>
          <div className={styles.gradient} />
        </div>
        <model-viewer
          style={{ width: '100%', height: '75vh' }}
          alt="Apollo's Spacesuit"
          src="/Astronaut.glb"
          shadow-intensity="1"
          touch-action="pan-y"
          camera-orbit="0deg 85deg 105%"
          camera-controls
          disable-pan
          disable-zoom
          auto-rotate
          ar
        />
      </Col>
      <Col id="desig-go" span={24}>
        <Row gutter={[24, 24]}>
          <Col span={24} style={{ textAlign: 'center', marginBottom: 96 }}>
            <Typography.Title level={1} type="secondary">
              LET&apos;S CRAFT YOUR SPACESUITE{' '}
              <span style={{ color: 'white' }}>🧑‍🚀</span>
            </Typography.Title>
          </Col>
          {naviagtors.map(({ title, url, description }, i) => (
            <Col key={i} xs={24} sm={12} xl={6}>
              <NavigationCard
                title={title}
                url={url}
                description={description}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
