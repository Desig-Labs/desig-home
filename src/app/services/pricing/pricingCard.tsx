import { Button, Col, Divider, Row, Space, Tag, Typography } from 'antd'
import Card from 'antd/es/card/Card'
import {
  Advanced,
  Custom,
  PricingContentData,
  PricingData,
  Standard,
} from './constant'
import { useMemo } from 'react'
import IonIcon from 'components/ionicon'

export type PricingType = 'standard' | 'advanced' | 'custom'
export type PricingCardProps = { type: PricingType }

const PRICING_DATA = {
  standard: Standard,
  advanced: Advanced,
  custom: Custom,
}

const SubContent = ({
  item,
  color,
}: {
  item: PricingContentData
  color: string
}) => {
  if (typeof item.value === 'string')
    return (
      <Space>
        <IonIcon style={{ color, fontSize: 20 }} name={item.icon} />
        <Typography.Text>{item.value}</Typography.Text>
      </Space>
    )

  return (
    <Space direction="vertical">
      <Space align="start">
        <IonIcon style={{ color, fontSize: 20 }} name={item.icon} />
        <Typography.Text>{item.value[0]}</Typography.Text>
      </Space>
      <ul
        style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0 }}
      >
        {[...item.value].splice(1, item.value.length).map((value) => (
          <li key={value}>
            <Typography.Text
              type="secondary"
              style={{ fontSize: 14, fontWeight: 300 }}
            >
              {value}
            </Typography.Text>
          </li>
        ))}
      </ul>
    </Space>
  )
}

export default function PricingCard({ type }: PricingCardProps) {
  const data: PricingData = useMemo(() => PRICING_DATA[type], [type])
  return (
    <Card className="pricing-card">
      <Row gutter={[0, 24]} justify="center">
        <Col>
          <Space direction="vertical" align="center" size={20}>
            <Space
              direction="vertical"
              align="center"
              style={{ textAlign: 'center' }}
            >
              <Tag
                style={{
                  backgroundColor: data.color,
                  padding: '6px 16px',
                  borderRadius: 99,
                  fontWeight: 'bold',
                  color: '#111014',
                }}
              >
                {data.title}
              </Tag>
              <Typography.Text type="secondary">
                {data.description}
              </Typography.Text>
            </Space>

            <Typography.Title level={2}>
              {data.symbol}
              {data.amount !== 0 && data.amount}
            </Typography.Title>
          </Space>
        </Col>
        <Col span={24}>
          <Divider style={{ margin: 0, borderColor: '#ffffff1a' }} />
        </Col>
        <Col span={24}>
          <Row gutter={[0, 16]}>
            {data.content.map((item, idx) => (
              <Col span={24} key={idx}>
                <SubContent item={item} color={data.color} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Button size="large" block className="ant-btn-primary">
        Get started
      </Button>
    </Card>
  )
}
