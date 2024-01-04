import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import { Col, Row, Space, Typography } from 'antd'
import WheelView from './wheelView'

import { MOCKUP_DESIG_SERVICE } from './mockup'

import 'swiper/css'
import 'swiper/css/pagination'
import './index.scss'

export default function SlideView() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <Row gutter={[24, 0]} justify="space-between">
      <Col xs={24} lg={14}>
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
          {MOCKUP_DESIG_SERVICE.map(({ title, desc }) => (
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
        <WheelView
          items={MOCKUP_DESIG_SERVICE.map(({ img }) => img)}
          activeIdx={activeIdx}
        />
      </Col>
    </Row>
  )
}
