'use client'
import { useWindowSize } from 'react-use'
import { useMemo } from 'react'

import { Button, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/ionicon'
import MaxWidthLayout from 'components/maxWidthLayout'
import Solution from './solution'
import Pricing from './pricing'
import SlideView from './slide'
import Image from 'next/image'

import { Infix } from 'providers/ui.provider'
import lightBg from 'static/images/services/light-service.png'
import lightLeft from 'static/images/services/light-left.svg'
import './index.scss'

export default function ServicesPage() {
  const { width } = useWindowSize()
  const isMobile = useMemo(() => width <= Infix.lg, [width])

  return (
    <MaxWidthLayout>
      <Row style={{ position: 'relative' }} justify="center">
        <Image src={lightBg} alt="light" className="light-service" />
        <Col span={24}>
          <Row gutter={[0, 56]}>
            <Col xs={{ span: 24, order: 2 }} lg={{ span: 16, order: 1 }}>
              <Space direction="vertical" size={isMobile ? 32 : 16}>
                <Typography.Title level={1}>
                  Build your bespoke financial system
                </Typography.Title>
                <Typography.Text type="secondary">
                  Empower your Web3 operations with Desig’s
                  Multisig-as-a-Service.
                </Typography.Text>
                <Col />
                <Button
                  block={isMobile}
                  type="primary"
                  size="large"
                  icon={<IonIcon name="chatbubbles-outline" />}
                >
                  Talk to us
                </Button>
              </Space>
            </Col>

            <Col xs={{ span: 24, order: 1 }} lg={{ span: 8, order: 2 }}>
              <iframe
                style={{ width: '100%', aspectRatio: 16 / 9 }}
                src="https://www.youtube.com/embed/n1rfOF-jOUc?si=D1EWw0_NKJXN8NYO"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </Col>
          </Row>
        </Col>

        <Col
          span={24}
          style={{
            position: 'relative',
            padding: `${isMobile ? 100 : 500}px 0`,
          }}
        >
          <Image src={lightLeft} alt="light" className="light-left-service" />
          <SlideView />
        </Col>
        <Col span={24} style={{ zIndex: 2 }}>
          <Solution />
        </Col>

        <Col span={24}>
          <Pricing />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
