import { Button, Col, Row, Space, Typography } from 'antd'
import { useRouter } from 'next/navigation'

import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from 'components/ionicon'

import './index.scss'

export const FutureOfMultisig = () => {
  const router = useRouter()
  return (
    <MaxWidthLayout>
      <Row gutter={[40, 40]} justify="center">
        <Col>
          <Row
            gutter={[16, 16]}
            justify="center"
            style={{ textAlign: 'center' }}
          >
            <Col>
              <Typography.Title level={2} style={{ maxWidth: 720 }}>
                Experience the first
              </Typography.Title>
              <Typography.Title level={2} style={{ maxWidth: 720 }}>
                <span className="gradient-text gradient-text-future">
                  Smart Omnichain Multisig
                </span>
              </Typography.Title>
              <Typography.Title level={2} style={{ maxWidth: 720 }}>
                tailored for User Simplicity
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text className="description" type="secondary">
                Be an OG on Desig and experience next-level shared custody.
              </Typography.Text>
            </Col>
          </Row>
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
              href="mailto:hi@desig.io"
              icon={<IonIcon name="chatbubbles-outline" />}
            >
              Talk to us
            </Button>
          </Space>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
