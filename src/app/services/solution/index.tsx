import { Card, Col, Row, Space, Typography } from 'antd'
import ScrollActive from './scrollActive'

import './index.scss'
import { Enterprise, Headless } from './constant'

export default function Solution() {
  return (
    <Row gutter={[0, 80]}>
      <Col span={24}>
        <Space size={17} direction="vertical">
          <Typography.Title style={{ fontSize: 52 }}>
            Pick your own{' '}
            <span className="gradient-text">protection blocks</span>
          </Typography.Title>
          <Typography.Text style={{ fontSize: 20 }} type="secondary">
            Tailor your multisig security with our exclusive features.
          </Typography.Text>
        </Space>
      </Col>
      <Col span={24}>
        <Card bodyStyle={{ padding: '0 32px' }}>
          <Row gutter={[0, 24]}>
            <Col sm={24} md={12} style={{ paddingTop: 48 }}>
              <Typography.Title level={4}>
                Enterprise Multisig Solution
              </Typography.Title>
            </Col>
            <Col sm={24} md={12}>
              <ScrollActive items={Enterprise} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card bodyStyle={{ padding: '0 32px' }}>
          <Row gutter={[0, 24]}>
            <Col sm={24} md={12} style={{ paddingTop: 48 }}>
              <Typography.Title level={4}>
                Headless Multisig Solution
              </Typography.Title>
            </Col>
            <Col sm={24} md={12}>
              <ScrollActive items={Headless} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
