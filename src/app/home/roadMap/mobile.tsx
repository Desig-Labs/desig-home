import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

import road from './assets/road.svg'
import mapQ42023 from './assets/q4-2023.svg'
import mapQ12024 from './assets/q1-2024.svg'
import mapQ22024 from './assets/q2-2024.svg'
import mapQ32024 from './assets/q3-2024.svg'
import mapQ42024 from './assets/q4-2024.svg'
import mapQ12025 from './assets/q1-2025.svg'
import 'swiper/css'

const ROAD_MAP = [
  mapQ42023,
  mapQ12024,
  mapQ22024,
  mapQ32024,
  mapQ42024,
  mapQ12025,
]

export default function RoadmapMobile() {
  return (
    <div style={{ position: 'relative', padding: '48px 0' }}>
      <Image
        src={road}
        alt="road-map"
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          width={340}
          style={{ overflow: 'unset' }}
        >
          {ROAD_MAP.map((src, index) => (
            <SwiperSlide style={{ width: 'auto' }} key={index}>
              <Image
                src={src}
                alt="roadmap"
                width={340}
                style={{ objectFit: 'cover', pointerEvents: 'none' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
