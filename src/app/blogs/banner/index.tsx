'use client'

import { Col, Row, Space } from 'antd'
import BannerCard from './bannerCard'

import { useBlogCard } from '../hook/useBlogs'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

export type BannerProps = {
  pageIds: string[]
  metadataMap: PageMap
}

export default function Banner({ pageIds, metadataMap }: BannerProps) {
  const { pinnedIds } = useBlogCard(pageIds, metadataMap)

  return (
    <Row gutter={[12, 24]}>
      <Col span={24}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {pinnedIds.slice(0, 1).map((pageId) => (
            <SwiperSlide key={pageId} style={{ width: '100%', height: '100%' }}>
              <BannerCard pageId={pageId} metadata={metadataMap[pageId]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  )
}
