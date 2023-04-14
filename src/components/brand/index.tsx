import { CSSProperties } from 'react'

import logo from './logo.svg'
import brand from './brand.svg'

export type BrandProps = {
  onClick?: () => void
  size?: number
  style?: CSSProperties
  named?: boolean
}

export default function Brand({
  onClick = () => {},
  size = 24,
  style = {},
  named = true,
}: BrandProps) {
  const src = named ? brand.src : logo.src
  return <img src={src} height={size} style={style} onClick={onClick} />
}
