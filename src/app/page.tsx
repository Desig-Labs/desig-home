'use client'

import { Col, Row, Typography } from 'antd'
import { NavigationCard } from 'components/cards/navigation'
import MaxWidthLayout from 'components/maxWidthLayout'
import InstallApp from './installApp/page'
import Banner from './banner/page'

const navigators = [
  {
    title: 'Core',
    url: 'https://www.npmjs.com/package/@desig/core',
    description:
      'Find in-depth information about Desig Core, which contains the main crypto algorithms for the protocol.',
  },
  {
    title: 'Docs',
    url: 'https://docs.desig.io/',
    description:
      'Learn about Desig in the well-explained document, or also find the whitepaper, and the yellowpaper.',
  },
  {
    title: '@desig/web3',
    url: 'https://web3.desig.io/',
    description:
      'Discover and deploy your projects on the blockchain-agnostic multisig solution with a comprehensive web3 library.',
  },
  {
    title: 'Infrastructure',
    url: 'http://infra.desig.io/',
    description:
      'Wanna become a validator, aka a contributor, aka a node in the Desig Infra? You can do it in seconds here!',
  },
]

export default async function App() {
  return (
    <Row gutter={[0, 128]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <InstallApp />
      </Col>
      <Col id="desig-go" span={24}>
        <MaxWidthLayout>
          <Row gutter={[24, 24]}>
            <Col span={24} style={{ textAlign: 'center', marginBottom: 96 }}>
              <Typography.Title level={1} type="secondary">
                LET&apos;S CRAFT YOUR SPACESUITE{' '}
                <span style={{ color: 'white' }}>🧑‍🚀</span>
              </Typography.Title>
            </Col>
            {navigators.map(({ title, url, description }, i) => (
              <Col key={i} xs={24} sm={12} xl={6}>
                <NavigationCard
                  title={title}
                  url={url}
                  description={description}
                />
              </Col>
            ))}
          </Row>
        </MaxWidthLayout>
      </Col>
    </Row>
  )
}
