'use client'
import { useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { Col, Row, Segmented, Space, Typography } from 'antd'
import PricingCard from './pricingCard'
import Image from 'next/image'

import { MAX_SCREEN_WIDTH } from 'components/maxWidthLayout'
import moon from './moon.png'
import './index.scss'
import { Infix } from 'providers/ui.provider'

export default function Pricing() {
  const { width } = useWindowSize()
  const moonSize = useMemo(() => {
    return Math.min(width, MAX_SCREEN_WIDTH)
  }, [width])

  const isMobile = useMemo(() => width <= Infix.md, [width])

  return (
    <Row>
      <div
        className="service-moon"
        style={{ width: moonSize, height: moonSize / 3 }}
      >
        <Image src={moon} alt="moon" />
      </div>
      <Col span={24}>
        <Row gutter={[0, isMobile ? 24 : 40]} justify="center">
          <Col>
            <Space direction="vertical" align="center">
              <Typography.Title style={{ textAlign: 'center' }}>
                <span className="gradient-text">Multisig Solutions</span> for
                Every Need
              </Typography.Title>
              <Typography.Text type="secondary">
                Seamlessly Integrating Advanced Security with Optimal
                Scalability
              </Typography.Text>
            </Space>
          </Col>
          <Col>
            <Segmented
              className="pricing-segmented"
              options={[
                { value: 'enterprise', label: 'Enterprise multisig solution' },
                { value: 'headless', label: 'Headless multisig solution' },
              ]}
            />
          </Col>
          <Col span={24} />
          <Col span={24}>
            <Row gutter={[24, 12]}>
              <Col sm={24} md={12} lg={8}>
                <PricingCard type="standard" />
              </Col>
              <Col sm={24} md={12} lg={8}>
                <PricingCard type="advanced" />
              </Col>
              <Col sm={24} md={12} lg={8}>
                <PricingCard type="custom" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
