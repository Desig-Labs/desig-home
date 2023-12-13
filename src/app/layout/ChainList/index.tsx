'use client'

import { useMemo } from 'react'
import { useWindowSize } from 'react-use'

import { Col, Row, Typography } from 'antd'
import { InfiniteSwiper } from 'components/infiniteSwiper'

import 'swiper/css'
import './index.scss'

export const PATH_RAW_IMG =
  'https://raw.githubusercontent.com/Desig-Labs/desig-assets/master/assets/listLogoChain/'

export const CHAINS = [
  'aptos.svg',
  'arbitrum.svg',
  'avax.svg',
  'base.svg',
  'bsc.svg',
  'eth.svg',
  'linea.svg',
  'moonbeam.svg',
  'movement.svg',
  'polygon.svg',
  'sei.svg',
  'shardeum.svg',
  'solana.svg',
  'sui.svg',
  'taiko.svg',
  'viction.svg',
  'zeta-chain.svg',
]
export const ScrollChainList = () => {
  const { width } = useWindowSize()

  const perview = useMemo(() => {
    let result = 4
    if (width > 575) result = 5
    if (width > 992) result = 6
    if (width > 1200) result = 7
    return result
  }, [width])

  return (
    <Row gutter={[16, 16]} justify="center" align="middle">
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_RAW_IMG}
          data={new Array(7).fill(CHAINS).flat(Infinity)}
          spacing={30}
          perViews={perview}
        />
      </Col>
      <Col span={24} className="bg-secondary feature-text">
        <Typography.Text className="color-gray">
          FEATURED NETWORKS WE LOVE
        </Typography.Text>
      </Col>
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_RAW_IMG}
          data={new Array(7).fill(CHAINS).flat(Infinity)}
          spacing={30}
          perViews={perview}
          reverse={true}
        />
      </Col>
    </Row>
  )
}
