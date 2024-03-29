'use client'
import Image from 'next/image'

import { Card, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import google from 'static/images/logo/google.svg'
import chPlay from 'static/images/logo/ch-play.svg'
import appStore from 'static/images/logo/app-store.svg'
import QR from 'static/images/qr-code.png'

import './index.scss'

const platforms = [
  {
    logo: google,
    url: 'https://chrome.google.com/webstore/detail/desig-wallet/panpgppehdchfphcigocleabcmcgfoca?hl=en',
    title: 'Download for Chrome',
    desc: 'Get the Wallet extension from the Chrome store',
  },
  {
    logo: appStore,
    url: 'https://apps.apple.com/app/desig-wallet/id6450106028',
    title: 'Download for iOS',
    desc: 'Get the Wallet mobile app from the App Store',
  },
  {
    logo: chPlay,
    url: 'https://play.google.com/store/apps/details?id=io.desig.app&hl=en',
    title: 'Download for Android',
    desc: 'Get the Wallet mobile app from the Google Play',
  },
]

export default function InstallApp() {
  return (
    <Row className="content-install-app">
      <Col span={24} className="bg-install-app" />
      <Col span={24}>
        <MaxWidthLayout>
          <Row gutter={[24, 24]} className="content">
            {platforms.map(({ logo, title, desc, url }, i) => (
              <Col key={i} xs={24} md={8}>
                <Card
                  bordered={false}
                  style={{ borderRadius: 28, height: '100%' }}
                  hoverable
                  bodyStyle={{ padding: 32 }}
                  onClick={() => window.open(url, '_blank')}
                >
                  <Row gutter={[24, 24]} align="middle">
                    <Col flex="auto">
                      <Image src={logo} alt={logo} />
                    </Col>
                    {!!i && (
                      <Col>
                        <Image src={QR} alt="qr" width={48} height={48} />
                      </Col>
                    )}
                    <Col span={24}>
                      <Space direction="vertical">
                        <Typography.Text
                          style={{ fontSize: '20px', fontWeight: 700 }}
                        >
                          {title}
                        </Typography.Text>
                        <Typography.Text type="secondary">
                          {desc}
                        </Typography.Text>
                      </Space>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </MaxWidthLayout>
      </Col>
    </Row>
  )
}
