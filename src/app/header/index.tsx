'use client'
import { useRouter } from 'next/navigation'

import { Card, Col, Row, Space, Switch, Typography } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'

import styles from './index.module.scss'
import { useTheme } from 'providers/ui.provider'

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <Row
      className={styles.header}
      gutter={[12, 12]}
      align="middle"
      wrap={false}
    >
      <Col flex="auto">
        <Brand
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
          theme={theme}
        />
      </Col>
      <Col>
        <Card bodyStyle={{ padding: '8px 12px' }}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Typography.Link
                href="https://twitter.com/DesigLabs"
                target="_blank"
              >
                <Space>
                  <IonIcon name="logo-twitter" />
                  @DesigLabs
                </Space>
              </Typography.Link>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col>
        <Switch
          checked={theme === 'dark'}
          onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          unCheckedChildren={<IonIcon name="sunny-outline" />}
          checkedChildren={<IonIcon name="moon-outline" />}
        />
      </Col>
    </Row>
  )
}
