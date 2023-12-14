'use client'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Card from 'antd/es/card/Card'

import Multisig from 'static/images/fortress/multisig.png'
import Service_Desig from 'static/images/fortress/service-desig.png'
import Arrow from 'static/images/btn-link.svg'

import './index.scss'

const FORTRESS_WEB3 = [
  {
    title: 'Smart Multisig On The Go',
    description: `Experience the first Omnichain Smart Multisig wallet that streamlines treasury ops. Watch your funds flourish with intuitive tracking, smart allocation & insightful cashflow reports. Enjoy gasless vault control, intel-driven swap, and optimal staking with our Aggregator to ensure maximum yield and return. Get your Smart Multisig on the go today!`,
    url: Multisig,
    onMore: 'Learn more',
    route: '/wallet',
  },
  {
    title: 'Multisig-as-a-Service',
    description:
      'Select a bespoke set of smart fighters. Utilize a drag-and-drop interface to pick your chosen features and create a financial ecosystem customized for your specific requirements. Get 24/7 support from global-winning technical experts.',
    url: Service_Desig,
    onMore: 'Coming soon',
    route: '#',
  },
]
export const FortressCard = () => {
  const router = useRouter()

  return (
    <Row gutter={[32, 32]}>
      {FORTRESS_WEB3.map(
        ({ title, description, url, onMore, route }, index) => (
          <Col span={24} key={index}>
            <Card bodyStyle={{ padding: 0 }} className="card-fortress">
              <Row gutter={[24, 24]} align="middle" justify="center">
                <Col span={24} order={2} md={{ order: 1, span: 12 }}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Typography.Title level={3}>{title}</Typography.Title>
                    </Col>
                    <Col span={24}>
                      <Typography.Text type="secondary">
                        {description}
                      </Typography.Text>
                    </Col>
                    <Col className="btn-fortress">
                      <Button
                        className="ant-btn"
                        style={{ width: '100%' }}
                        onClick={() => router.push(route)}
                      >
                        {onMore}
                        <Image
                          src={Arrow}
                          alt="arrow"
                          style={{ marginLeft: 8 }}
                        />
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col
                  span={24}
                  order={1}
                  md={{ order: 2, span: 12 }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Image src={url} alt="multisig" className="img-fortress" />
                </Col>
              </Row>
            </Card>
          </Col>
        ),
      )}
    </Row>
  )
}
