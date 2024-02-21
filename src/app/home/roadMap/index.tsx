'use client'

import { useWindowSize } from 'react-use'
import { useMemo } from 'react'

import { Col, Row, Typography } from 'antd'
import Image from 'next/image'
import MaxWidthLayout from 'components/maxWidthLayout'
import RoadmapMobile from './mobile'

import { Infix } from 'providers/ui.provider'

import RoadMapImg from 'static/images/roadmap/road-map.svg'
import './index.scss'

export const RoadMap = () => {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => width <= Infix.xl, [width])

  return (
    <MaxWidthLayout>
      <Row gutter={[8, 8]} justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={2}>
            <span className="gradient-text gradient-road-map">Our Vision</span>
            {` `}for the Future
          </Typography.Title>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Typography.Text className="description" type="secondary">
            Follow our journey to conquer the Web3 multisig realm
          </Typography.Text>
        </Col>
        <Col span={24} style={{ aspectRatio: 3 / 2, marginTop: 32 }}>
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
