'use client'

import { Col, Row, Typography } from 'antd'
import Image from 'next/image'

import { PrizeCard } from './prizeCard'
import MaxWidthLayout from 'components/maxWidthLayout'

import IMG from 'static/images/leading-line.svg'

import './index.scss'

export const LeadingInnovators = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[80, 80]} align="middle" justify="center">
        <Col>
          <Row
            gutter={[16, 8]}
            wrap={true}
            justify="center"
            style={{ textAlign: 'center' }}
          >
            <Col>
              <Typography.Title level={2}>
                Revered by
                <Typography.Title
                  level={2}
                  className="gradient-text gradient-text-leading"
                >
                  Web3&apos;s leading innovators
                </Typography.Title>
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text className="description" type="secondary">
                Within{' '}
                <span
                  className="color-white"
                  style={{ fontWeight: 700, position: 'relative' }}
                >
                  8 months
                  <Image src={IMG} alt="line" className="line-under" />
                </span>
                , Desig brought home Golds and Silvers from multiple hackathons
                across the globe.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <PrizeCard />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
