import { CSSProperties } from 'react'

import { Image, Space, Typography } from 'antd'

import logo from 'static/images/logo.png'

export type DesigProps = {
  onClick?: () => void
  size?: number
  style?: CSSProperties
}

export default function Desig({
  onClick = () => {},
  size = 24,
  style = {},
}: DesigProps) {
  return (
    <Space style={style} size={size / 3} onClick={onClick}>
      <Image alt="desig-logo" width={size} src={logo.src} preview={false} />
      <Typography.Title style={{ fontSize: size, fontWeight: 700, margin: 0 }}>
        Desig
      </Typography.Title>
    </Space>
  )
}
