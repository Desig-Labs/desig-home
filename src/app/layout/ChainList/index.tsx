import { useMemo } from 'react'

import { Col, Row, Typography } from 'antd'
import { InfiniteSwiper } from 'components/infiniteSwiper'

import { useWidth } from 'providers/ui.provider'

import 'swiper/css'
import './index.scss'

export const PATH_RAW_IMG =
  'https://raw.githubusercontent.com/Desig-Labs/desig-assets/master/assets/listLogoChain/'

export const CHAINS = [
  'arbitrum.svg',
  'avax.svg',
  'base.svg',
  'comdex.svg',
  'hedera.svg',
  'linea.svg',
  'moonbeam.svg',
  'movement.svg',
  'polygon.svg',
  'sei.svg',
  'shardeum.svg',
  'starkne.svg',
  'taiko.svg',
  'viction.svg',
  'zeta-chain.svg',
]
export const ScrollChainList = () => {
  const { width } = useWidth()

  const perview = useMemo(() => {
    let result = 3
    if (width > 575) result = 4
    if (width > 992) result = 5
    if (width > 1200) result = 6
    return result
  }, [width])

  return (
    <Row gutter={[16, 16]} justify="center" align="middle">
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_RAW_IMG}
          data={new Array(6).fill(CHAINS).flat(Infinity)}
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
          data={new Array(6).fill(CHAINS).flat(Infinity)}
          spacing={30}
          perViews={perview}
          reverse={true}
        />
      </Col>
    </Row>
  )
}
