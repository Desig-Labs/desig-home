'use client'

import { Col, Row, Typography } from 'antd'
import Image from 'next/image'

import MaxWidthLayout from 'components/maxWidthLayout'

import RoadMapImg from 'static/images/roadmap/road-map.svg'
import './index.scss'

export const RoadMap = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2}>
            <span className="gradient-text gradient-road-map">Our Vision</span>
            {` `}for the Future
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Text className="description" type="secondary">
            Follow our journey to conquer the Web3 multi-sig realm
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Image
            src={RoadMapImg}
            alt="roadmap"
            style={{ height: '70%', width: 'auto' }}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
