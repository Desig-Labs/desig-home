import Spline from '@splinetool/react-spline'
import Card from 'antd/es/card/Card'
import { Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import { useState } from 'react'

const LIST_PRIZES = [
  {
    icon: 'https://prod.spline.design/i4Ox-WywmgxNTpJx/scene.splinecode',
    title: '1st Overall Prize',
    descriptions: 'at Sui Network x KuCoin Labs Summer Hackathon.',
    disable: true,
  },
  {
    icon: 'https://prod.spline.design/kLqoAcuzkyPKKUM6/scene.splinecode',
    title: 'Outstanding Project Award',
    descriptions: 'at Zetachain x Dorahacks Omnichain Hackathon.',
    disable: false,
  },
  {
    icon: 'https://prod.spline.design/W9Hgv0WCjJAVcqTQ/scene.splinecode',
    title: 'Honorable Mentions',
    descriptions: 'at Sui Liquidity Staking Hackathon.',
    disable: false,
  },
  {
    icon: 'https://prod.spline.design/kLqoAcuzkyPKKUM6/scene.splinecode',
    title: '3rd place',
    descriptions: 'at Solana Hyperdriver MCM.',
    disable: false,
  },
]
export const PrizeCard = () => {
  const [selectedItem, setSelectedItem] = useState(0)

  const mouseHover = (index: number) => {
    setSelectedItem(index)
  }

  const mouseLeave = () => {
    setSelectedItem(0)
  }
  return (
    <MaxWidthLayout>
      <Row wrap={false} gutter={[12, 12]} justify="center">
        {LIST_PRIZES.map(({ icon, title, descriptions }, idx) => (
          <Col key={idx}>
            <Card
              className={`ant-card-bordered ${
                selectedItem === idx
                  ? 'active-card animation-card'
                  : 'un-active-card'
              } `}
              onMouseOver={() => mouseHover(idx)}
              onMouseLeave={mouseLeave}
            >
              <Row gutter={[24, 24]} justify="center">
                <Col style={{ marginTop: 80 }}>
                  <Spline style={{ height: 160, width: 160 }} scene={icon} />
                </Col>
                <Col>
                  <Space size={12} direction="vertical">
                    <Typography.Title level={3}>{title}</Typography.Title>
                    <Typography style={{ opacity: 0.7 }}>
                      {descriptions}
                    </Typography>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}
