import { useRouter } from 'next/navigation'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import { twitter } from 'configs/socials.constant'

import './index.scss'

export const FutureOfMultisig = () => {
  const router = useRouter()
  return (
    <MaxWidthLayout>
      <Row gutter={[40, 40]} justify="center" style={{ paddingTop: 20 }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Typography.Title level={2}>Experience the first</Typography.Title>
          <Typography.Title level={2}>
            <span className="gradient-text gradient-text-future">
              Smart Omnichain Multisig
            </span>
          </Typography.Title>
          <Typography.Title level={2}>
            tailored for User Simplicity
          </Typography.Title>
        </Col>
        <Col>
          <Space>
            <Button
              size="large"
              className="ant-btn-primary"
              icon={<IonIcon name="key-outline" />}
              onClick={() => router.push('/install-app')}
            >
              Get Early Access
            </Button>
            <Button
              size="large"
              href={twitter}
              target="_blank"
              icon={<IonIcon name="chatbubbles-outline" />}
            >
              Talk To Us
            </Button>
          </Space>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
