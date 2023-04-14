'use client'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'

import { email } from 'configs/socials.constant'
import Link from 'next/link'
import { Ripple } from 'components/splash'

export default async function App() {
  const router = useRouter()

  return (
    <Row gutter={[24, 64]}>
      <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Space>
              <Button size="large">Coming Soon 🚀</Button>
              <Button type="primary" size="large" href={email} target="_blank">
                Say Hi 👋
              </Button>
            </Space>
          </Col>
          <Col span={24}>
            <Typography.Title style={{ fontSize: 128 }}>Desig</Typography.Title>
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
                href="#pasd"
                style={{ position: 'relative', left: -52, top: -6 }}
              >
                <Typography.Title level={5}>
                  PREPARE FOR THE MOON 🌕
                </Typography.Title>
              </Link>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
        <model-viewer
          style={{ margin: 0, width: '100%', height: '75vh', borderRadius: 24 }}
          alt="Apollo's Spacesuit"
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
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
    </Row>
  )
}
