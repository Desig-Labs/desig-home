import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDebounce } from 'react-use'

import { LoadingOutlined } from '@ant-design/icons'
import { Col, Row, Space, Spin } from 'antd'
import Desig from 'components/desig'

const BaseSplash = styled.div({
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  backdropFilter: 'blur(24px)',
})

export type SplashProps = {
  open?: boolean
}

export default function Splash({ open }: SplashProps) {
  const [display, setDisplay] = useState<'block' | 'none'>('block')

  useDebounce(
    () => {
      if (!open) setDisplay('none')
    },
    500,
    [open],
  )

  useEffect(() => {
    if (open) setDisplay('block')
  }, [open])

  return (
    <BaseSplash style={{ display }}>
      <Row gutter={[24, 24]} justify="center">
        <Col style={{ marginTop: '35vh' }}>
          <Space direction="vertical" align="center">
            <Desig />
            <Spin size="large" indicator={<LoadingOutlined />} spinning />
          </Space>
        </Col>
      </Row>
    </BaseSplash>
  )
}
