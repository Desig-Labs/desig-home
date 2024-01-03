import { useMemo } from 'react'
import { useWindowSize } from 'react-use'
import { Infix } from 'providers/ui.provider'
import { Card, Col, Row, Space, Typography } from 'antd'
import ScrollActive from './scrollActive'

import { Enterprise, Headless } from './constant'
import './index.scss'

export default function Solution() {
  const { width } = useWindowSize()

  const isMobile = useMemo(() => width <= Infix.md, [width])

  return (
    <Row gutter={[0, isMobile ? 48 : 80]}>
      <Col span={24}>
        <Space size={17} direction="vertical">
          <Typography.Title>
            Pick your own{' '}
            <span className="gradient-text">protection blocks</span>
          </Typography.Title>
          <Typography.Text style={{ fontSize: 20 }} type="secondary">
            Tailor your multisig security with our exclusive features.
          </Typography.Text>
        </Space>
      </Col>
      <Col span={24}>
        <Card
          bodyStyle={{ padding: `0 ${isMobile ? 16 : 32}px` }}
          style={{ borderColor: '#ffffff1a' }}
        >
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
        <Card
          bodyStyle={{ padding: `0 ${isMobile ? 16 : 32}px` }}
          style={{ borderColor: '#ffffff1a' }}
        >
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
