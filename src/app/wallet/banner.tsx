'use client'
import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import './index.scss'
import Spline from '@splinetool/react-spline'

const Banner = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={14}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space direction="vertical">
                <Typography.Title level={1}>
                  Transcend your co-ownership wallet limits
                </Typography.Title>
              </Space>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="description">
                Unleash your team&apos;s financial dominance on omni-chain.
              </Typography.Text>
            </Col>
            <Col span={24} style={{ marginTop: 28 }}>
              <Button
                size="large"
                className="ant-btn-primary"
                icon={<IonIcon name="key-outline" />}
              >
                Get Early Access
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={10}>
          <Spline scene="https://prod.spline.design/8qIm7MTcLWdCAzsw/scene.splinecode" />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
