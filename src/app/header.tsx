import { Card, Col, Row, Space, Typography } from 'antd'
import Desig from 'components/desig'
import IonIcon from '@sentre/antd-ionicon'

export default function Header() {
  const onHome = () => (window.location.href = window.location.origin)

  return (
    <Row gutter={[24, 24]} wrap={false} align="middle">
      <Col flex="auto">
        <Desig onClick={onHome} style={{ cursor: 'pointer' }} />
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
