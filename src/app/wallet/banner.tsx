'use client'
import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'
import Spline from '@splinetool/react-spline'

export default function Banner() {
  return (
    <MaxWidthLayout>
      <Row
        className="item-responsive"
        gutter={[0, 16]}
        align="middle"
        justify="space-between"
      >
        <Col xs={24} md={12}>
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
                className="banner-btn-access ant-btn-primary"
                icon={<IonIcon name="key-outline" />}
              >
                Get Early Access
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12}>
          <Spline
            style={{ height: '431px' }}
            scene="https://prod.spline.design/BQZqYlKPGsOOI9nr/scene.splinecode"
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
