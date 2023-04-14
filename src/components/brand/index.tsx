import { CSSProperties } from 'react'

import logo from './logo.svg'
import light from './brand-in-light.svg'
import dark from './brand-in-dark.svg'

const brands = {
  light,
  dark,
}

export type BrandProps = {
  onClick?: () => void
  size?: number
  style?: CSSProperties
  named?: boolean
  theme?: Theme
}

export default function Brand({
  onClick = () => {},
  size = 24,
  style = {},
  named = true,
  theme = 'light',
}: BrandProps) {
  const src = named ? brands[theme]?.src || light : logo.src
  return <img src={src} height={size} style={style} onClick={onClick} />
}
