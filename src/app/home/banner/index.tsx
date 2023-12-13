'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useWindowSize } from 'react-use'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import { ScrollChainList } from 'app/layout/ChainList'
import Img from './desig-web.png'
import Line from 'static/images/line.svg'

import './index.scss'

const LOOP_TEXTS = [
  'Smart Wallet Security',
  'Smart Staking',
  'Cashflow Management',
  'DAO Governance',
  'Private Multisig System',
  'Omnichain Infrastructure',
  'RWA Investments',
]

const Banner = () => {
  const { width } = useWindowSize()
  const router = useRouter()
  const [txtIndex, setTxtIndex] = useState(0)

  const isMobile = useMemo(() => {
    let result = true
    if (width > 768) result = false
    return result
  }, [width])

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTxtIndex((prev) => {
          let nextIdx = prev + 1
          if (prev >= LOOP_TEXTS.length - 1) nextIdx = 0
          return nextIdx
        }),
      2000,
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <Row>
      <Col span={24}>
        <MaxWidthLayout>
          <Row gutter={[24, 24]} wrap={isMobile}>
            <Col xs={{ order: 2, span: 24 }} md={{ order: 1, span: 10 }}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Space direction="vertical">
                    <Typography.Title level={1} className="text-title-banner">
                      The First{' '}
                    </Typography.Title>
                    <Typography.Title level={1} className="text-title-banner">
                      Omnichain
                    </Typography.Title>
                    <Typography.Title level={1} className="text-title-banner">
                      <span className="gradient-text gradient-text-banner-1">
                        Multi-Smart Multisig
                        <Image src={Line} alt="line" className="line-banner" />
                      </span>{' '}
                    </Typography.Title>
                  </Space>
                </Col>
                <Col>
                  <Typography.Text type="secondary" className="description">
                    A holistic solution to{' '}
                    <span className="italic-text">{LOOP_TEXTS[txtIndex]}</span>
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
            <Col
              xs={{ order: 1, span: 24 }}
              md={{ order: 2, span: 14 }}
              style={{ textAlign: 'right' }}
            >
              <Image
                src={Img}
                alt=""
                style={{ width: '100%', height: '80%' }}
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
