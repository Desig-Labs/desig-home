import { Card, Col, Row, Typography } from 'antd'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

import './index.scss'

export type FeatureCardProps = {
  title: string
  icon: StaticImageData
}
export const FeatureCard = ({ title = '', icon }: FeatureCardProps) => {
  return (
    <Card
      bodyStyle={{ width: 320 }}
      style={{ height: '100%' }}
      className="ant-card"
    >
      <Row gutter={[8, 8]} justify="end">
        <Col span={24}>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'end', height: '100%' }}>
          <Image src={icon} alt="" style={{ width: '50%', height: '50%' }} />
        </Col>
      </Row>
    </Card>
  )
}
