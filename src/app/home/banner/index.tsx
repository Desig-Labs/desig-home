'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import { useWidth } from 'providers/ui.provider'
import { ScrollChainList } from 'app/layout/ChainList'
import Img from './desig-web.png'

import Line from 'static/images/line.svg'
import './index.scss'

const Banner = () => {
  const { width } = useWidth()
  const router = useRouter()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 768) result = false
    return result
  }, [width])

  return (
    <Row>
      <Col span={24}>
        <MaxWidthLayout>
          <Row gutter={[24, 24]} wrap={isMobile}>
            <Col xs={24 && { order: 2 }} md={12 && { order: 1 }}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Space direction="vertical">
                    <Typography.Title level={1} className="text-title-banner">
                      <span className="gradient-text gradient-text-banner-1">
                        Multi-sig
                        <Image src={Line} alt="line" className="line-banner" />
                      </span>{' '}
                      meets
                    </Typography.Title>
                    <Typography.Title
                      level={1}
                      className="gradient-text gradient-text-banner-2"
                    >
                      Multi-chain
                    </Typography.Title>
                  </Space>
                </Col>
                <Col span={24}>
                  <Typography.Text type="secondary" className="description">
                    A holistic solution to{' '}
                    <span className="italic-text">Wallet Security</span>
                  </Typography.Text>
                </Col>
                <Col span={24} style={{ marginTop: 28 }}>
                  <Button
                    size="large"
                    className="ant-btn-primary btn-get-access-banner"
                    icon={<IonIcon name="key-outline" />}
                    onClick={() => router.push('/install-app')}
                  >
                    Get Early Access
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24 && { order: 1 }} md={12 && { order: 2 }}>
              <Image
                src={Img}
                alt=""
                style={{ height: '100%', width: '100%' }}
              />
            </Col>
          </Row>
        </MaxWidthLayout>
      </Col>
      <Col style={{ marginTop: 120 }} span={24}>
        <ScrollChainList />
      </Col>
    </Row>
  )
}

export default Banner
