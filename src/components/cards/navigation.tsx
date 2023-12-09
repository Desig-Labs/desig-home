import { Card, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/ionicon'

export type NavigationCardProps = {
  title: string
  url: string
  description: string
}

export function NavigationCard({
  title,
  url,
  description,
}: NavigationCardProps) {
  return (
    <Card onClick={() => window.open(url, '_blank')} hoverable>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Space>
            <Typography.Title>{title}</Typography.Title>
            <Typography.Title level={3}>
              <IonIcon name="arrow-forward-outline" />
            </Typography.Title>
          </Space>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </Col>
      </Row>
    </Card>
  )
}
