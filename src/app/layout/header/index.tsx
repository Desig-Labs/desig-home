'use client'
import { usePathname, useRouter } from 'next/navigation'

import { Button, Col, Row, Space } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'
import DrawerHeader from './drawerHeader'

import './index.scss'

export const SECTIONS_LIST = [
  { title: 'Wallet', route: '/wallet', disabled: false },
  { title: 'Services', route: '/services', disabled: true },
  { title: 'Docs', route: '/docs', disabled: true },
  { title: 'Blog', route: '/blog', disabled: true },
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
              {SECTIONS_LIST.map(({ title, route, disabled }) => (
                <Button
                  key={title}
                  type="text"
                  disabled={disabled}
                  onClick={() => router.push(route)}
                  className={path === route ? 'tab active' : 'tab'}
                >
                  {title}
                </Button>
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
