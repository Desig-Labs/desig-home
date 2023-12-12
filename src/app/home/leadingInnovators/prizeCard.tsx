'use client'

import { useMemo } from 'react'

import Spline from '@splinetool/react-spline'
import Card from 'antd/es/card/Card'
import { Col, Row, Typography } from 'antd'

import { useWidth } from 'providers/ui.provider'

import './index.scss'

const LIST_PRIZES = [
  {
    icon: 'https://prod.spline.design/nuUbDpfMnQBMxLCI/scene.splinecode',
    title: '1st Overall Prize',
    descriptions: 'at Sui Network x KuCoin Labs Summer Hackathon.',
    disable: true,
  },
  {
    icon: 'https://prod.spline.design/2kf3KFipvmlQFnS4/scene.splinecode',
    title: 'Outstanding Project Award',
    descriptions: 'at Zetachain x Dorahacks Omnichain Hackathon.',
    disable: false,
  },
  {
    icon: 'https://prod.spline.design/gTswT3fi6gD4qy7M/scene.splinecode',
    title: 'Honorable Mentions',
    descriptions: 'at Sui Liquidity Staking Hackathon.',
    disable: false,
  },
  {
    icon: 'https://prod.spline.design/jHhpMrKRfe5U2nPe/scene.splinecode',
    title: '3rd place',
    descriptions: 'at Solana Hyperdriver MCM.',
    disable: false,
  },
]
export const PrizeCard = () => {
  const { width } = useWidth()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 992) result = false
    return result
  }, [width])

  return (
    <Row
      wrap={isMobile}
      gutter={[12, 12]}
      justify="center"
      align="middle"
      style={{ cursor: 'pointer' }}
      className="wrap-innovator"
    >
      {LIST_PRIZES.map(({ icon, title, descriptions }, idx) => (
        <Col
          span={isMobile ? 24 : 'auto'}
          key={idx}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            className="ant-card-bordered"
            bodyStyle={{ position: 'relative' }}
          >
            <Row gutter={[24, 24]} justify={'center'}>
              <Col className="icon-award">
                <Spline scene={icon} />
              </Col>
              <Col span={24}>
                <Row gutter={[12, 12]} justify="center" align="middle">
                  <Col span={24}>
                    <Typography.Title level={4}>{title}</Typography.Title>
                  </Col>
                  <Col style={{ textAlign: 'center' }}>
                    <Typography.Text
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      {descriptions}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
