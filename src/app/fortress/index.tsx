import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import React from 'react'

import './index.scss'
import { FortressCard } from './fortressCard'

export const Fortress = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[80, 80]} justify="center">
        <Col>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Typography.Title style={{ fontSize: 52 }}>
                Choose your own{' '}
                <span className="gradient-text gradient-fortress">
                  Web3 fortress
                </span>
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 20 }} type="secondary">
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
