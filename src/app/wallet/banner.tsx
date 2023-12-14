'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import BANNER from 'static/images/wallet/banner.png'

export default function Banner() {
  const router = useRouter()
  return (
    <MaxWidthLayout>
      <Row className="item-responsive" gutter={[0, 16]} justify="space-between">
        <Col xs={24} md={14}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Space direction="vertical">
                <Typography.Title level={1}>Omnichain</Typography.Title>
                <Typography.Title level={1} className="gradient-text">
                  Smart Multisig
                </Typography.Title>
                <Typography.Title level={1} className="gradient-text">
                  On The Go
                </Typography.Title>
              </Space>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="description">
                Simplify your Treasury operations
              </Typography.Text>
            </Col>
            <Col span={24} style={{ marginTop: 28 }}>
              <Button
                size="large"
                className="banner-btn-access ant-btn-primary"
                icon={<IonIcon name="key-outline" />}
                onClick={() => router.push('/install-app')}
              >
                Get Early Access
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={10}>
          <Image
            style={{ width: '100%', height: '100%' }}
            alt="wallet"
            src={BANNER}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
