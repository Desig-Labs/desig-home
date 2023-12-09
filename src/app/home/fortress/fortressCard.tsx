'use client'

import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Card from 'antd/es/card/Card'

import Multisig from 'static/images/fortress/multisig.png'
import Service_Desig from 'static/images/fortress/service-desig.png'
import Arrow from 'static/images/btn-link.svg'

import './index.scss'

const FORTRESS_WEB3 = [
  {
    title: 'The Multi-sig Wallet',
    description:
      'With Desig&apos;s cutting-edge technologies, take control without compromise. No keys. No central entity. A wallet designed to transform your digital asset management experience',
    url: Multisig,
  },
  {
    title: 'Multisig-as-a-Service',
    description:
      'Choose your own set of fighters. Drag and drop your preferred functions and build your own financial system, tailored to your needs and wants. Get 24/7 support from global-winning technical experts',
    url: Service_Desig,
  },
]
export const FortressCard = () => {
  return (
    <Row gutter={[32, 32]}>
      {FORTRESS_WEB3.map(({ title, description, url }, index) => (
        <Col span={24} key={index}>
          <Card bodyStyle={{ padding: 64 }}>
            <Row gutter={[24, 24]} align="middle" justify="center">
              <Col span={24} order={2} md={{ order: 1, span: 12 }}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Typography.Text className="title-card-fortress">
                      {title}
                    </Typography.Text>
                  </Col>
                  <Col span={24}>
                    <Typography.Text
                      className="description-card-fortress"
                      type="secondary"
                    >
                      {description}
                    </Typography.Text>
                  </Col>
                  <Col style={{ paddingTop: 24 }}>
                    <Button className="ant-btn">
                      Learn more
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
      ))}
    </Row>
  )
}
