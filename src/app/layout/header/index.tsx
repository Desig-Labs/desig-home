'use client'
import { useRouter } from 'next/navigation'

import { Button, Col, Row, Segmented } from 'antd'
import Brand from 'components/brand'
import IonIcon from 'components/ionicon'
import MaxWidthLayout from 'components/maxWidthLayout'

import styles from './index.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <MaxWidthLayout>
      <Row
        className={styles.header}
        gutter={[12, 12]}
        align="middle"
        wrap={false}
        style={{ padding: 24 }}
        justify="space-between"
      >
        <Col>
          <Brand
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </Col>
        <Col>
          <Segmented
            className="tab-bar-segmented"
            options={[
              {
                label: 'Wallet',
                value: 'Wallet',
              },
              {
                label: 'Service',
                value: 'Service',
              },
              {
                label: 'Docs',
                value: 'Docs',
              },
              {
                label: 'Blog',
                value: 'Blog',
              },
            ]}
          />
        </Col>
        <Col>
          <Button className="ant-btn" icon={<IonIcon name="key-outline" />}>
            Get Early Access
          </Button>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
