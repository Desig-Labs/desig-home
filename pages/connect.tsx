import { useCallback, useEffect, useState } from 'react'

import { Button, Col, message, Row, Space, Typography } from 'antd'
import { useWeb3 } from 'providers/web3.provider'

export default function Connect() {
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState(0)
  const [blockNumber, setBlockNumber] = useState(0)
  const web3 = useWeb3()

  const getBalance = useCallback(async () => {
    try {
      setLoading(true)
      if (!web3) throw new Error('Wallet is not connected')
      const re = await web3.eth.getBalance(
        '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      )
      return setBalance(Number(re) / 10 ** 18)
    } catch (er: any) {
      return message.error(er.message)
    } finally {
      return setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!web3) return () => {}
    const sub = web3.eth
      .subscribe('newBlockHeaders')
      .on('data', ({ number }) => {
        setBlockNumber(number)
      })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Space direction="vertical" size={0}>
          <Typography.Title level={5} type="danger">
            Block: #{blockNumber}
          </Typography.Title>
          <Typography.Title level={5} type="danger">
            Balance: {balance} ETH
          </Typography.Title>
        </Space>
      </Col>
      <Col span={24}>
        <Button
          type="primary"
          size="large"
          onClick={getBalance}
          loading={loading}
        >
          Connect
        </Button>
      </Col>
    </Row>
  )
}
