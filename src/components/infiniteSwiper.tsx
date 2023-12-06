import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Image } from 'antd'

import 'swiper/css'

export type InfiniteSwiperProps = {
  perViews?: number
  spacing?: number
  speed?: number
  data?: string[]
  rootPath?: string
  reverse?: boolean
}
export const InfiniteSwiper = ({
  perViews = 4,
  spacing = 0,
  speed = 5000,
  data = [],
  rootPath = '',
  reverse = false,
}: InfiniteSwiperProps) => {
  const configAutoplay = {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: reverse,
  }

  return (
    <Swiper
      spaceBetween={spacing}
      slidesPerView={perViews}
      centeredSlides={true}
      autoplay={configAutoplay}
      speed={speed}
      modules={[Autoplay]}
      loop={true}
    >
      {data.map((src, index) => (
        <SwiperSlide style={{ width: 'auto' }} key={index}>
          <Image preview={false} alt="" src={`${rootPath}${src}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
