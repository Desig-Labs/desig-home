'use client'
import { Fragment, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import Banner from './banner'
import Navigation from './navigation'
import { Button, Col, Input, Modal, Row, Typography, message } from 'antd'
import IonIcon from 'components/ionicon'

import { useBlogs } from './hook/useBlogs'

import ellipseBottom from 'static/images/blogs/ellips-bottom.png'
import './index.scss'

let condition = 0

export default function BlogPage() {
  const [enabled, setEnabled] = useState(false)
  const [urlDeploy, setUrlDeploy] = useState('')
  const {
    data: { pageIds, metadataMap },
  } = useBlogs()

  const onClose = () => {
    condition = 0
    setEnabled(condition > 4)
  }

  const onSubmit = useCallback(async () => {
    try {
      if (!urlDeploy) throw new Error('Invalid url.')
      await axios.post(urlDeploy)
    } catch (er: any) {
      message.error(er.message)
    } finally {
      onClose()
    }
  }, [urlDeploy])

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === ';' && condition < 51) {
        condition++
        setEnabled(condition > 50)
      }
    })

    return () => {
      document.removeEventListener('keydown', () => onClose)
    }
  }, [onSubmit])

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
          {/* <Col span={24}>
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
          </Col> */}
        </Row>
      </Col>
      <Col span={24}>
        <Banner pageIds={pageIds} metadataMap={metadataMap} />
      </Col>
      <Col span={24}>
        <Navigation pageIds={pageIds} metadataMap={metadataMap} />
      </Col>
      {enabled && (
        <Modal
          open={enabled}
          onCancel={onClose}
          footer={false}
          closable={false}
        >
          <Input
            value={urlDeploy}
            onChange={(e) => setUrlDeploy(e.target.value)}
            suffix={
              <Button
                type="text"
                icon={<IonIcon name="cloud-upload-outline" />}
                onClick={onSubmit}
              />
            }
            onPressEnter={onSubmit}
          />
        </Modal>
      )}
    </Row>
  )
}
