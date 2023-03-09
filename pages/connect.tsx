import { useCallback, useEffect, useMemo, useState } from 'react'
import Web3 from 'web3'

import { Button, Col, Row, Space, Typography } from 'antd'
import { WsProvider } from 'provider'

const provider: any = new WsProvider()
// const metamask = window.ethereum

export default function Connect() {
  const [balance, setBalance] = useState('0x0')
  const [blockNumber, setBlockNumber] = useState(0)

  const web3 = useMemo(() => new Web3(provider), [])

  const getBalance = useCallback(async () => {
    const re = await web3.eth.getBalance(
      '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    )
    return setBalance(re)
  }, [web3])

  useEffect(() => {
    const sub = web3.eth
      .subscribe('newBlockHeaders')
      .on('data', ({ number }) => {
        setBlockNumber(number)
      })
    return () => {
      sub.unsubscribe()
    }
  }, [web3])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Space direction="vertical" size={0}>
          <Typography.Title level={5} type="danger">
            Block: #{blockNumber}
          </Typography.Title>
          <Typography.Title level={5} type="danger">
            Balance: {balance}
          </Typography.Title>
        </Space>
      </Col>
      <Col span={24}>
        <Button type="primary" size="large" onClick={getBalance}>
          Connect
        </Button>
      </Col>
    </Row>
  )
}
