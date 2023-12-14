'use client'

import { Button, Col, Row, Space, Typography } from 'antd'
import Image from 'next/image'
import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import Arrow from 'static/images/btn-link.svg'

import style from './index.module.scss'
import {
  blog,
  docs,
  core,
  github,
  web3,
  brandkit,
  twitter,
  youtube,
  linkedin,
} from 'configs/socials.constant'

export const RESOURCES = [
  {
    name: 'Blog (Coming soon)',
    url: blog,
  },
  {
    name: 'Github',
    url: github,
  },
  {
    name: 'Docs',
    url: docs,
  },
  {
    name: 'Core',
    url: core,
  },
  {
    name: 'Web3 Library',
    url: web3,
  },
  {
    name: 'Brand & Press',
    url: brandkit,
  },
]

export const FOLLOW_US = [
  {
    name: 'Twitter',
    url: twitter,
  },
  {
    name: 'YouTube',
    url: youtube,
  },
  {
    name: 'LinkedIn',
    url: linkedin,
  },
]

export default function Footer() {
  return (
    <MaxWidthLayout>
      <Row className={style.footer} gutter={[56, 56]} justify="start">
        <Col flex="auto">
          <Space direction="vertical" size={24}>
            <Brand size={32} theme="dark" />
            <Typography.Text className="caption" type="secondary">
              Desig Labs © 2023, All Rights Reserved.
            </Typography.Text>
          </Space>
        </Col>
        <Col>
          <Space direction="vertical" size={24}>
            <Typography.Text strong>Products</Typography.Text>
            <Space direction="vertical" size={16}>
              <Typography.Text type="secondary">
                Multisig Wallet
              </Typography.Text>
              <Typography.Text type="secondary">
                Multisig-as-a-service
              </Typography.Text>
            </Space>
          </Space>
        </Col>
        <Col>
          <Space direction="vertical" size={24}>
            <Typography.Text strong>Resources</Typography.Text>
            <Space direction="vertical">
              {RESOURCES.map(({ name, url }, index) => (
                <Button
                  key={index}
                  href={url}
                  type="text"
                  className="btn-footer"
                >
                  <Space>
                    <Typography.Text type="secondary">{name}</Typography.Text>
                    <Image src={Arrow} alt="arrow" />
                  </Space>
                </Button>
              ))}
            </Space>
          </Space>
        </Col>
        <Col>
          <Space direction="vertical" size={24}>
            <Typography.Text strong>Follow us</Typography.Text>
            <Space direction="vertical">
              {FOLLOW_US.map(({ name, url }, index) => (
                <Button key={index} href={url} type="text" className="">
                  <Space>
                    <Typography.Text type="secondary">{name}</Typography.Text>
                    <Image src={Arrow} alt="arrow" />
                  </Space>
                </Button>
              ))}
            </Space>
          </Space>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
