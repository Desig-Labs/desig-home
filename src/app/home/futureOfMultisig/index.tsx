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
          <Row gutter={[16, 16]} justify="center">
            <Col>
              <Typography.Title
                level={2}
                style={{ maxWidth: 720, textAlign: 'center' }}
              >
                Transform your future of{' '}
                <span className="gradient-text gradient-text-future">
                  multi-sig management today
                </span>
              </Typography.Title>
            </Col>
            <Col>
              <Typography.Text
                style={{ textAlign: 'center' }}
                className="description"
                type="secondary"
              >
                Be an OG on Desig and experience next-level shared custody.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Space>
            <Button
              className="ant-btn-primary"
              icon={<IonIcon name="key-outline" />}
              onClick={() => router.push('/install-app')}
            >
              Get Early Access
            </Button>
            <Button
              href="mailto:hi@desig.io"
              icon={<IonIcon name="mail-outline" />}
            >
              Mail to
            </Button>
          </Space>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
