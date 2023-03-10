import { CSSProperties } from 'react'

import { Image, Space, Typography } from 'antd'

import logo from 'public/images/logo.png'

export type DesigProps = {
  size?: number
  style?: CSSProperties
}

export default function Desig({ size = 24, style = {} }: DesigProps) {
  return (
    <Space style={style} size={size / 3}>
      <Image width={size} src={logo.src} preview={false} />
      <Typography.Title style={{ fontSize: size, fontWeight: 700 }}>
        Desig
      </Typography.Title>
    </Space>
  )
}
