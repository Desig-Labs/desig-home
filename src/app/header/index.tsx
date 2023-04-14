'use client'
import { useRouter } from 'next/navigation'

import { Card, Col, Row, Space, Typography } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'

import styles from './index.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <Row className={styles.header} gutter={[24, 24]} wrap={false}>
      <Col flex="auto">
        <Brand onClick={() => router.refresh()} style={{ cursor: 'pointer' }} />
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
    </Row>
  )
}
