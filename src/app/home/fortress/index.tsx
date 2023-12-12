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
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Typography.Title level={2}>
                Choose your own{' '}
                <span className="gradient-text gradient-fortress">
                  Web3 fortress
                </span>
              </Typography.Title>
            </Col>
            <Col style={{ textAlign: 'center' }}>
              <Typography.Text className="description" type="secondary">
                Use our multi-function wallet or build your own customized
                system.
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
