'use client'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Image from 'next/image'

import './index.scss'
import IonIcon from 'components/ionicon'
import Line from 'static/images/line.svg'
import { ScrollChainList } from 'app/layout/ChainList'
import Spline from '@splinetool/react-spline'

const Banner = () => {
  return (
    <Row>
      <Col span={24}>
        <Image
          src={Line}
          alt="line"
          style={{ position: 'absolute', top: -120 }}
        />
      </Col>
      <Col span={24}>
        <MaxWidthLayout>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Space direction="vertical">
                    <Typography.Title
                      style={{ fontSize: 70, lineHeight: 'normal' }}
                    >
                      <span className="gradient-text gradient-banner-1">
                        Multi-sig
                      </span>{' '}
                      meets
                    </Typography.Title>
                    <Typography.Title className="gradient-text gradient-banner-2">
                      Multi-chain
                    </Typography.Title>
                  </Space>
                </Col>
                <Col span={24}>
                  <Typography.Text type="secondary" style={{ fontSize: 20 }}>
                    A holistic solution to{' '}
                    <span className="italic-text">Wallet Security</span>
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
            <Col xs={24} md={12}>
              <Spline
                style={{ height: 350, width: '100%' }}
                scene="https://prod.spline.design/ggwuYlnJDuOzvQvE/scene.splinecode"
              />
            </Col>
          </Row>
        </MaxWidthLayout>
      </Col>
      <Col style={{ marginTop: 64 }} span={24}>
        <ScrollChainList />
      </Col>
    </Row>
  )
}

export default Banner
