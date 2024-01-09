'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Col, Row } from 'antd'
import BannerCard from './bannerCard'

import { useBlogCard } from '../hook/useBlogs'

import 'swiper/css'
import 'swiper/css/navigation'

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
            <SwiperSlide key={pageId}>
              <BannerCard pageId={pageId} metadata={metadataMap[pageId]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  )
}
