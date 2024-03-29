'use client'
import { usePathname, useRouter } from 'next/navigation'

import { Button, Col, Row, Space } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'
import DrawerHeader from './drawerHeader'
import MaxWidthLayout from 'components/maxWidthLayout'

import { docs } from 'configs/socials.constant'

import './index.scss'

export const SECTIONS_LIST = [
  { title: 'Wallet', route: '/wallet', disabled: false },
  { title: 'Services', route: '/services', disabled: false },
  { title: 'Docs', route: docs, disabled: false },
  { title: 'Blog', route: '/blog', disabled: false },
]

export default function Header() {
  const router = useRouter()
  const path = usePathname()

  return (
    <MaxWidthLayout style={{ zIndex: 1 }}>
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
            {SECTIONS_LIST.map(({ title, route, disabled }) => {
              if (route === docs)
                return (
                  <Button
                    key={title}
                    disabled={disabled}
                    href={route}
                    type="text"
                    target="_blank"
                    className="tab"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    {title}
                  </Button>
                )
              return (
                <Button
                  key={title}
                  type="text"
                  disabled={disabled}
                  onClick={() => router.push(route)}
                  className={path === route ? 'tab active' : 'tab'}
                >
                  {title}
                </Button>
              )
            })}
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
    </MaxWidthLayout>
  )
}
