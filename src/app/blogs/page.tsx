'use client'
import { Fragment } from 'react'
import Image from 'next/image'

import Banner from './banner'
import Navigation from './navigation'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Col, Input, Row, Typography, Button } from 'antd'

import { useBlogs } from './hook/useBlogs'
import ellipseBottom from 'static/images/blogs/ellips-bottom.png'
import ListBlog from './listBlog'

export default function BlogPage() {
  const {
    data: { pageIds, metadataMap },
  } = useBlogs()

  if (!pageIds || !metadataMap) return <Fragment />

  return (
    <MaxWidthLayout>
      <Row className="blog-page" justify="center" gutter={[0, 120]}>
        <Image src={ellipseBottom} alt="light" className="ellipse-bottom" />
        <Col span={24} style={{ marginTop: 24 }}>
          <Row gutter={[0, 20]} justify="center">
            <Col span={24}>
              <Typography.Title level={1} style={{ textAlign: 'center' }}>
                Desig <span className="gradient-text">Blog</span>
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text type="secondary" className="description">
                Sign up for our newsletter to receive the latest news and
                product updates.
              </Typography.Text>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Row gutter={[12, 12]} justify="center">
                <Col span={8}>
                  <Input size="large" placeholder="Input your email address" />
                </Col>
                <Col>
                  <Button
                    size="large"
                    type="primary"
                    style={{ height: '100%' }}
                  >
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
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Navigation pageIds={pageIds} metadataMap={metadataMap} />
            </Col>
            <Col span={24}>
              <ListBlog pageIds={pageIds} metadataMap={metadataMap} />
            </Col>
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
