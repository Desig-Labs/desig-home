import { Col, Row, Typography } from 'antd'

import 'swiper/css'
import { InfiniteSwiper } from 'components/infiniteSwiper'
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
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_RAW_IMG}
          data={new Array(6).fill(CHAINS).flat(Infinity)}
          spacing={30}
          perViews={6}
        />
      </Col>
      <Col
        span={24}
        className="bg-secondary"
        style={{ textAlign: 'center', padding: 16 }}
      >
        <Typography.Text className="color-gray">
          FEATURED NETWORKS WE LOVE
        </Typography.Text>
      </Col>
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_RAW_IMG}
          data={new Array(6).fill(CHAINS).flat(Infinity)}
          spacing={30}
          perViews={6}
          reverse={true}
        />
      </Col>
    </Row>
  )
}
