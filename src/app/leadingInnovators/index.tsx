import { Col, Row, Typography } from 'antd'
import React from 'react'
import Image from 'next/image'
import IMG from 'static/images/leading-line.svg'
import './index.scss'
import { PrizeCard } from './prizeCard'

export const LeadingInnovators = () => {
  return (
    <Row gutter={[80, 80]} align="middle" justify="center">
      <Col>
        <Row gutter={[8, 8]} wrap={true} justify="center">
          <Col>
            <Typography.Title style={{ fontSize: 52, textAlign: 'center' }}>
              Revered by
              <Typography.Title className="gradient-text gradient-text-leading">
                Web3&apos;s leading innovators
              </Typography.Title>
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Image
              src={IMG}
              alt="line"
              style={{
                position: 'absolute',
                left: 327,
                top: 13,
              }}
            />
          </Col>
          <Col>
            <Typography.Text style={{ fontSize: 20 }} type="secondary">
              Within{' '}
              <span className="color-white" style={{ fontWeight: 700 }}>
                8 months
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
  )
}
