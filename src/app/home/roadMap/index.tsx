'use client'

import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import MaxWidthLayout from 'components/maxWidthLayout'
import RoadmapMobile from './mobile'

import { Infix, useWidth } from 'providers/ui.provider'

import RoadMapImg from 'static/images/roadmap/road-map.svg'
import './index.scss'

export const RoadMap = () => {
  const { infix } = useWidth()
  const isMobile = infix < Infix.xl

  return (
    <MaxWidthLayout>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Typography.Title level={2}>
            <span className="gradient-text gradient-road-map">Our Vision</span>
            {` `}for the Future
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Text className="description" type="secondary">
            Follow our journey to conquer the Web3 multi-sig realm
          </Typography.Text>
        </Col>
        <Col span={24} style={{ aspectRatio: 3 / 2 }}>
          {!isMobile ? (
            <Image src={RoadMapImg} alt="roadmap" fill />
          ) : (
            <RoadmapMobile />
          )}
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}