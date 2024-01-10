'use client'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import BannerCard from './bannerCard'

import { useBlogCard } from '../hook/useBlogs'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button, Col, Row } from 'antd'
import IonIcon from 'components/ionicon'

export type BannerProps = {
  pageIds: string[]
  metadataMap: PageMap
}

export default function Banner({ pageIds, metadataMap }: BannerProps) {
  const { pinnedIds } = useBlogCard(pageIds, metadataMap)
  const swipper = useSwiper()

  return (
    <Row className="blog-swiper" justify="center" gutter={[0, 24]}>
      <Col span={24}>
        {/* Slide Blog */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            el: '.blog-swiper-pagination',
            type: 'bullets',
            clickable: true,
          }}
          navigation={{
            prevEl: '.btn-swiper.prev',
            nextEl: '.btn-swiper.next',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {pinnedIds.map((pageId) => (
            <SwiperSlide key={pageId}>
              <BannerCard pageId={pageId} metadata={metadataMap[pageId]} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Blog */}
        <Button
          className="btn-swiper prev"
          onClick={() => swipper?.slidePrev()}
        >
          <IonIcon name="arrow-back-outline" />
        </Button>
        <Button
          className="btn-swiper next"
          onClick={() => swipper?.slideNext()}
        >
          <IonIcon name="arrow-forward-outline" />
        </Button>
      </Col>
      {/* Pagination Blog */}
      <Col>
        <div className="blog-swiper-pagination" />
      </Col>
    </Row>
  )
}
