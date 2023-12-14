'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import { FortressCard } from './fortressCard'

import './index.scss'

export const Fortress = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[80, 80]} justify="center">
        <Col>
          <Row
            gutter={[16, 16]}
            justify="center"
            style={{ textAlign: 'center' }}
          >
            <Col>
              <Typography.Title level={2}>
                Choose your own{' '}
                <span className="gradient-text gradient-fortress">
                  Web3 fortress
                </span>
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text className="description" type="secondary">
                Use our{' '}
                <span className="color-white" style={{ fontWeight: 700 }}>
                  Smart multisig wallet
                </span>{' '}
                or build your{' '}
                <span className="color-white" style={{ fontWeight: 700 }}>
                  Tailor-made multisig setup
                </span>
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <FortressCard />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
