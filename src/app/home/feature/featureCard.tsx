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
}
export const FeatureCard = ({
  title = '',
  icon,
  maxWidth,
}: FeatureCardProps) => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 992) result = false
    return result
  }, [width])

  return (
    <Card
      style={{ height: '100%', cursor: 'pointer' }}
      bodyStyle={{ height: '100%' }}
      className="ant-card"
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
  )
}
