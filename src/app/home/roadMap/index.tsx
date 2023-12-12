'use client'

import { useWindowSize } from 'react-use'

import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import MaxWidthLayout from 'components/maxWidthLayout'
import RoadmapMobile from './mobile'

import { Infix } from 'providers/ui.provider'

import RoadMapImg from 'static/images/roadmap/road-map.svg'
import './index.scss'

export const RoadMap = () => {
  const { width } = useWindowSize()

  const isMobile = width < Infix.xl

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
