import { Button, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import Card from 'antd/es/card/Card'
import Img_Multisig from 'static/images/fortress/multisig.png'
import Arrow from './arrow.svg'

import './index.scss'
export const FortressCard = () => {
  return (
    <Card bodyStyle={{ padding: 64 }}>
      <Row gutter={[24, 24]} align="middle" justify="center" wrap={false}>
        <Col span={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Typography.Title level={2}>
                The Multi-sig Wallet
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text style={{ fontSize: 16 }} type="secondary">
                With Desig&apos;s cutting-edge technologies, take control
                without compromise. No keys. No central entity. A wallet
                designed to transform your digital asset management experience.
              </Typography.Text>
            </Col>
            <Col style={{ paddingTop: 24 }}>
              <Button className="ant-btn">
                Learn more
                <Image src={Arrow} alt="arrow" style={{ marginLeft: 8 }} />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col flex="auto" style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={Img_Multisig} alt="multisig" className="img-fortress" />
        </Col>
      </Row>
    </Card>
  )
}
