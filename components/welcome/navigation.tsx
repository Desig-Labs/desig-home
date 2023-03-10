import IonIcon from '@sentre/antd-ionicon'
import { Card, Col, Row, Space, Typography } from 'antd'

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
            <Typography.Title level={3}>{title}</Typography.Title>
            <Typography.Title level={3}>
              <IonIcon name="arrow-forward-outline" />
            </Typography.Title>
          </Space>
        </Col>
        <Col span={24}>
          <Typography.Paragraph type="secondary">
            {description}
          </Typography.Paragraph>
        </Col>
      </Row>
    </Card>
  )
}

const naviagtors = [
  {
    title: 'Core',
    url: 'https://www.npmjs.com/package/@desig/core',
    description:
      'Find in-depth information about Desig Core, which contains the main cryptography algorithms for the protocol.',
  },
  {
    title: 'Docs',
    url: 'https://docs.desig.io/',
    description:
      'Learn about Desig in a well-explained document, a whitepaper, and a yellowpaper.',
  },
  {
    title: '@desig/web3',
    url: 'https://web3.desig.io/',
    description:
      'Discover and deploy your projects on the layer-0 of multisig with a comprehensive web3 library.',
  },
  {
    title: 'Infrastructure',
    url: 'http://infra.desig.io/',
    description:
      'Wanna become a validator, aka a contributor, aka a node in the Desig Infra? You can do it in seconds here!',
  },
]

export default function Navigation() {
  return (
    <Row gutter={[24, 24]}>
      {naviagtors.map(({ title, url, description }, i) => (
        <Col key={i} xs={24} md={12} lg={6}>
          <NavigationCard title={title} url={url} description={description} />
        </Col>
      ))}
    </Row>
  )
}
