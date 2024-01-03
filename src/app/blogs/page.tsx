'use client'
import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Image from 'next/image'

import ellipseBottom from 'static/images/blogs/ellips-bottom.png'
import './index.scss'

export default function ServicesPage() {
  return (
    <MaxWidthLayout>
      <Row style={{ position: 'relative' }} justify="center">
        <Image src={ellipseBottom} alt="light" className="ellipse-bottom" />
        <Col span={24}>
          <Typography.Title level={1} style={{ textAlign: 'center' }}>
            Desig <span className="gradient-text">Blog</span>
          </Typography.Title>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
