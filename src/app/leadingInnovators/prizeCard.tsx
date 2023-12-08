import { useMemo, useState } from 'react'

import Spline from '@splinetool/react-spline'
import Card from 'antd/es/card/Card'
import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import { useWidth } from 'providers/ui.provider'

import './index.scss'

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

  const { width } = useWidth()

  const isMobile = useMemo(() => {
    let result = true
    if (width > 992) result = false
    return result
  }, [width])

  const mouseHover = (index: number) => {
    setSelectedItem(index)
  }

  const mouseLeave = () => {
    setSelectedItem(0)
  }
  return (
    <Row wrap={isMobile} gutter={[12, 12]} justify="center" align="middle">
      {LIST_PRIZES.map(({ icon, title, descriptions }, idx) => (
        <Col
          span={isMobile ? 24 : 'auto'}
          key={idx}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card
            className={`ant-card-bordered ${
              selectedItem === idx
                ? 'active-card animation-card'
                : 'un-active-card'
            } `}
            onMouseOver={() => mouseHover(idx)}
            onMouseLeave={mouseLeave}
          >
            <Row gutter={[24, 24]} justify={'center'}>
              <Col className="icon-award">
                <Spline scene={icon} />
              </Col>
              <Col span={24}>
                <Row gutter={[12, 12]} justify="center" align="middle">
                  <Col span={24}>
                    <Typography.Title level={3}>{title}</Typography.Title>
                  </Col>
                  <Col style={{ textAlign: 'center' }}>
                    <Typography.Text
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      {descriptions}
                    </Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
