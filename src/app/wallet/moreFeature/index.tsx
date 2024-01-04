'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import FeatureCard from './featureCard'

import SOCIAL_RECOVERY from 'static/images/wallet/feature/social-recovery.png'
import CHATTING from 'static/images/wallet/feature/chatting.png'
import NOTIFICATION from 'static/images/wallet/feature/noti.png'
import SCHEDULED from 'static/images/wallet/feature/scheduled.png'
import RESTAKING from 'static/images/wallet/feature/restaking.png'
import AGGREGATOR from 'static/images/wallet/feature/aggregator.png'

import 'swiper/css'

const LIST_FEATURE = [
  {
    title: 'Social Recovery',
    desc: 'Effortless account recovery via trusted social channels',
    img: SOCIAL_RECOVERY,
  },
  {
    title: 'In-app Chatting',
    desc: 'Seamless and secure multisig collaboration at your fingertips',
    img: CHATTING,
  },
  {
    title: 'Notification On The Go',
    desc: 'Stay instantly informed with real-time updates across devices',
    img: NOTIFICATION,
  },

  {
    title: 'Scheduled Transaction (Coming Soon)',
    desc: 'Automate future transactions by scheduling actions ahead of time',
    img: SCHEDULED,
  },

  {
    title: 'Restaking (Coming Soon)',
    desc: 'Maximize returns via effortless asset restaking across chains',
    img: RESTAKING,
  },
  {
    title: 'RWA Aggregator (Coming Soon)',
    desc: 'Maximize your investment potential with real-world asset investment',
    img: AGGREGATOR,
  },
]

export default function MoreFeature() {
  return (
    <MaxWidthLayout>
      <Row className="section-container" justify="start">
        <Col span={20}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                And more features...
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView="auto"
            style={{
              overflow: 'unset',
              height: '100%',
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop
          >
            {LIST_FEATURE.map(({ title, desc, img }) => (
              <SwiperSlide style={{ width: 'unset' }} key={title}>
                <FeatureCard title={title} desc={desc} img={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
