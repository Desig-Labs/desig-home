'use client'

import { useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { Card, Col, Row, Typography } from 'antd'
import MobileView from './mobileView'
import SlideView from './slideView'

import { Infix } from 'providers/ui.provider'

import 'swiper/css'
import 'swiper/css/pagination'
import './index.scss'

export default function SlideService() {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => width <= Infix.md, [width])

  return (
    <Row gutter={[0, 146]}>
      <Col span={isMobile ? 24 : undefined}>
        <Card
          className="flexible-radius"
          bodyStyle={{ padding: '8px 12px', textAlign: 'center' }}
          style={{ borderColor: '#ffffff1a', borderRadius: 12 }}
          bordered
        >
          <Typography className="text-gradient text-uppercase">
            Why use Desig multisig-as-a-service?
          </Typography>
        </Card>
      </Col>
      {isMobile ? <MobileView /> : <SlideView />}
    </Row>
  )
}
