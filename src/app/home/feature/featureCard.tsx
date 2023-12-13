'use client'

import React, { useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { Card, Col, Row, Typography } from 'antd'
import Image, { StaticImageData } from 'next/image'

import './index.scss'

export type FeatureCardProps = {
  title: string
  icon: StaticImageData
  maxWidth: string | number
  desc: string
}
export const FeatureCard = ({
  title,
  icon,
  maxWidth,
  desc,
}: FeatureCardProps) => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 992) result = false
    return result
  }, [width])

  return (
    <div className="flip-card">
      {/* Back */}
      <Card
        bodyStyle={{ height: '100%' }}
        className="flip-card-back card-transparent flexible-radius"
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text>{desc}</Typography.Text>
          </Col>
        </Row>
      </Card>

      {/* Front */}
      <Card
        style={{ height: '100%' }}
        bodyStyle={{ height: '100%' }}
        className="ant-card flip-card-front"
      >
        <Row gutter={[16, 16]} wrap={!isMobile}>
          <Col md={24} flex={isMobile ? ' auto' : 'none'}>
            <Typography.Title level={4}>{title}</Typography.Title>
          </Col>
          <Col className="icon-feature">
            <Image
              src={icon}
              alt=""
              style={{ width: '50%', height: '50%', maxWidth }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
