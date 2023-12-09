'use client'
import { usePathname, useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'
import DrawerHeader from './drawerHeader'
import MaxWidthLayout from 'components/maxWidthLayout'

import './index.scss'

export const SECTIONS_LIST = [
  { title: 'Wallet', route: '/wallet' },
  { title: 'Services', route: '/services' },
  { title: 'Docs', route: '/docs' },
  { title: 'Blog', route: '/blog' },
]

export default function Header() {
  const router = useRouter()
  const path = usePathname()

  return (
    <MaxWidthLayout>
      <Row
        className="header"
        align="middle"
        wrap={false}
        style={{ padding: '20px 0' }}
        justify="space-between"
      >
        <Col span={4}>
          <Brand
            size={32}
            theme="dark"
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </Col>
        <Col className="tabs-section">
          <Space size={40}>
            {SECTIONS_LIST.map(({ title, route }) => (
              <Typography.Text
                style={{ cursor: 'pointer' }}
                key={route}
                onClick={() => router.push(route)}
                className={path === route ? 'tab active' : 'tab'}
              >
                {title}
              </Typography.Text>
            ))}
          </Space>
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          <Button
            className="btn-access ant-btn"
            style={{ borderRadius: '12px', padding: '4px 12px' }}
            icon={<IonIcon name="key-outline" />}
          >
            Get Early Access
          </Button>
          {/* Reponsive Mobile */}
          <DrawerHeader />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
