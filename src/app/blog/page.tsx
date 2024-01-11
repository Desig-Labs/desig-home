'use client'
import { Fragment } from 'react'
import Image from 'next/image'

import Banner from './banner'
import Navigation from './navigation'
import { Col, Input, Row, Typography, Button } from 'antd'

import { useBlogs } from './hook/useBlogs'

import ellipseBottom from 'static/images/blogs/ellips-bottom.png'
import './index.scss'

export default function BlogPage() {
  const {
    data: { pageIds, metadataMap },
  } = useBlogs()

  if (!pageIds || !metadataMap) return <Fragment />

  return (
    <Row className="blog-page" justify="center" gutter={[0, 120]}>
      <Col span={24}>
        <Image src={ellipseBottom} alt="light" className="ellipse-bottom" />
      </Col>
      <Col span={24} style={{ marginTop: -60 }}>
        <Row gutter={[0, 20]} justify="center" style={{ textAlign: 'center' }}>
          <Col span={24}>
            <Typography.Title level={1}>
              Desig <span className="gradient-text">Blog</span>
            </Typography.Title>
          </Col>
          <Col>
            <Typography.Text type="secondary" className="description">
              Sign up for our newsletter to receive the latest news and product
              updates.
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Row gutter={[12, 12]} justify="center">
              <Col xs={16} md={8}>
                <Input size="large" placeholder="Input your email address" />
              </Col>
              <Col>
                <Button size="large" type="primary" style={{ height: '100%' }}>
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Banner pageIds={pageIds} metadataMap={metadataMap} />
      </Col>
      <Col span={24}>
        <Navigation pageIds={pageIds} metadataMap={metadataMap} />
      </Col>
    </Row>
  )
}
