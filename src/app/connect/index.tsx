import { useCallback, useEffect, useState } from 'react'

import { Button, Col, message, Row, Space, Typography } from 'antd'

import { useWeb3 } from 'providers/web3.provider'
import { numeric } from 'helpers/utils'

export default function Connect() {
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState(0)
  const [blockNumber, setBlockNumber] = useState(0)
  const web3 = useWeb3()

  const connect = useCallback(async () => {
    try {
      setLoading(true)
      if (!web3) throw new Error('Wallet is not connected')
      const [addr] = await web3.eth.getAccounts()
      if (!addr) throw new Error('Wallet is not connected')
      return setAddress(addr)
    } catch (er: any) {
      return message.error(er.message)
    } finally {
      return setLoading(false)
    }
  }, [web3])

  const disconnect = useCallback(async () => {
    setAddress('')
    setBalance(0)
    setBlockNumber(0)
    return (web3?.eth?.currentProvider as any)?.disconnect()
  }, [web3])

  const fetch = useCallback(async () => {
    if (!web3 || !address) return
    const wei = await web3.eth.getBalance(address)
    return setBalance(Number(wei) / 10 ** 18)
  }, [web3, address])

  const watch = useCallback(() => {
    if (!web3) return () => {}
    const sub = web3.eth
      .subscribe('newBlockHeaders')
      .on('data', ({ number }) => {
        setBlockNumber(number)
      })
    return () => {
      sub.unsubscribe()
    }
  }, [web3])

  useEffect(() => {
    fetch()
    return watch()
  }, [fetch, watch])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Space direction="vertical" size={0}>
          <Typography.Title level={5}>
            Block: #{numeric(blockNumber).format('0,0')}
          </Typography.Title>
          <Typography.Title level={5}>Address: {address}</Typography.Title>
          <Typography.Title level={5}>
            Balance: {numeric(balance).format('0,0.[000]')} ETH
          </Typography.Title>
        </Space>
      </Col>
      <Col span={24}>
        <Space>
          <Button size="large" onClick={disconnect} disabled={!address}>
            Disconnect
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={connect}
            loading={loading}
          >
            Connect
          </Button>
        </Space>
      </Col>
    </Row>
  )
}
