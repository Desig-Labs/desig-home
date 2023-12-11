'use client'
import { usePathname, useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'
import DrawerHeader from './drawerHeader'

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
    <Row style={{ padding: '0px 24px', zIndex: 1 }} justify="center">
      <Col xs={24} md={22} xl={18}>
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
                  style={{
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
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
              onClick={() => router.push('/install-app')}
            >
              Get Early Access
            </Button>
            {/* Responsive Mobile */}
            <DrawerHeader />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
