'use client'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import Feature_Img from 'static/images/feature/features.png'
import Gas from 'static/images/feature/gas.png'
import In_app_Chatting from 'static/images/feature/inapp-chatting.png'
import Mobile from 'static/images/feature/mobile.png'
import Notification from 'static/images/feature/notification.png'
import Safety_Box from 'static/images/feature/safety-box.png'
import Seamless from 'static/images/feature/seamless.png'
import Single_App from 'static/images/feature/single-app.png'

import './index.scss'

const FEATURES = [
  {
    index: 1,
    title: 'In-app Live Discussions',
    icon: In_app_Chatting,
    maxWidth: 'unset',
  },
  {
    index: 2,
    title: 'Seamless Vault Creation',
    icon: Seamless,
    maxWidth: 'unset',
  },
  {
    index: 3,
    title: 'Gas-less. Fee-less. Worry Less',
    icon: Gas,
    maxWidth: 'unset',
  },
  {
    index: 4,
    title: 'Multi-chain. Multi-vault. One Single App',
    icon: Single_App,
    maxWidth: 'unset',
  },
  {
    index: 5,
    title: 'Real-time Alerts On The Go',
    icon: Notification,
    maxWidth: 'unset',
  },
  {
    index: 6,
    title: 'Private Matter Stay Private',
    icon: Safety_Box,
    maxWidth: 'unset',
  },
  {
    index: 7,
    title: 'Key-less Nature. Fearless Future',
    icon: Feature_Img,
    maxWidth: 200,
  },
  {
    index: 8,
    title: 'Mobile-First Design',
    icon: Mobile,
    maxWidth: 'unset',
  },
]
import './index.scss'
import { FeatureCard } from './featureCard'
export const Feature = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[80, 80]} justify="center">
        <Col>
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Typography.Title
                level={2}
                className="gradient-text gradient-feature"
              >
                Secure. Private. Effortless.
              </Typography.Title>
            </Col>
            <Col style={{ textAlign: 'center' }}>
              <Typography.Text className="description" type="secondary">
                Harmonizing proven technology and user-centric design for
                multi-sig excellence.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={[24, 24]} justify="center" className="grid-layout">
            {FEATURES.map(({ title, icon, maxWidth, index }) => (
              <Col key={index} className={`item-grid item${index}`}>
                <FeatureCard title={title} icon={icon} maxWidth={maxWidth} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
