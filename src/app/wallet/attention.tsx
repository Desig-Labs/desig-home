'use client'
import Image from 'next/image'

import { Button, Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import SHINE from 'static/images/wallet/shine.png'

export default function Attention() {
  return (
    <MaxWidthLayout>
      <Row style={{ textAlign: 'center' }} align="middle" justify="center">
        <Col span={24}>
          <Image src={SHINE} alt="line" />
        </Col>
        <Col span={24} style={{ top: '-150px' }}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                Transform your future of
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Title level={2}>
                <span className="gradient-text">multi-sig management</span>{' '}
                today
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="description">
                Be an OG on Desig and experience next-level shared custody.
              </Typography.Text>
            </Col>
            <Col span={24} style={{ marginTop: 24 }}>
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
      </Row>
    </MaxWidthLayout>
  )
}
