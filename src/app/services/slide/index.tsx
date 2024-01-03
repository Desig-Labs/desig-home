'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import { Card, Col, Row, Space, Typography } from 'antd'
import WheelView from './wheelView'

import 'swiper/css'
import 'swiper/css/pagination'
import './index.scss'

const MockupArray = [
  {
    title: 'Social Recovery',
    desc: 'Effortless account recovery via trusted social channels',
  },
  {
    title: 'In-app Chatting1',
    desc: 'Seamless and secure multisig collaboration at your fingertips',
  },
  {
    title: 'In-app Chatting2',
    desc: 'Seamless and secure multisig collaboration at your fingertips',
  },
]

export default function SlideView() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <Row gutter={[0, 146]}>
      <Col>
        <Card
          className="flexible-radius"
          bodyStyle={{ padding: '8px 12px' }}
          style={{ borderColor: '#ffffff1a', borderRadius: 12 }}
          bordered
        >
          <Typography className="text-gradient">
            Why use Desig multisig-as-a-service?
          </Typography>
        </Card>
      </Col>
      <Row gutter={[24, 0]} justify="space-between">
        <Col xs={24} lg={16}>
          <div className="feature-swiper-pagination" />
          <Swiper
            slidesPerView={1}
            onActiveIndexChange={(e) => setActiveIdx(e.activeIndex)}
            modules={[Autoplay, Pagination]}
            pagination={{
              el: '.feature-swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            autoplay
          >
            {MockupArray.map(({ title, desc }) => (
              <SwiperSlide key={title}>
                <Space direction="vertical" size={24}>
                  <Typography.Text style={{ fontSize: 52 }} strong>
                    {title}
                  </Typography.Text>
                  <Typography.Text style={{ fontSize: 20 }} type="secondary">
                    {desc}
                  </Typography.Text>
                </Space>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col>
          <WheelView activeIdx={activeIdx} />
        </Col>
      </Row>
    </Row>
  )
}
