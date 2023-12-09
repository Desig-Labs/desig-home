'use client'

import { Card, Col, Row, Typography } from 'antd'
import Image, { StaticImageData } from 'next/image'
import React, { useMemo } from 'react'

import './index.scss'
import { useWidth } from 'providers/ui.provider'

export type FeatureCardProps = {
  title: string
  icon: StaticImageData
}
export const FeatureCard = ({ title = '', icon }: FeatureCardProps) => {
  const { width } = useWidth()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 992) result = false
    return result
  }, [width])

  return (
    <Card
      style={{ height: '100%' }}
      bodyStyle={{ height: '100%' }}
      className="ant-card"
    >
      <Row gutter={[16, 16]} wrap={!isMobile}>
        <Col md={24} flex={isMobile ? ' auto' : 'none'}>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
        <Col className="icon-feature">
          <Image src={icon} alt="" style={{ width: '50%', height: '50%' }} />
        </Col>
      </Row>
    </Card>
  )
}
