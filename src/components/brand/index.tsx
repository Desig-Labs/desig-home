import { CSSProperties, useEffect, useState } from 'react'

import logo from './logo.svg'
import light from './brand-in-light.svg'
import dark from './brand-in-dark.svg'

const brands: Record<string, string> = {
  light: light.src,
  dark: dark.src,
}

export type BrandProps = {
  onClick?: () => void
  size?: number
  style?: CSSProperties
  named?: boolean
  theme?: Theme | ''
}

export default function Brand({
  onClick = () => {},
  size = 24,
  style = {},
  named = true,
  theme = '',
}: BrandProps) {
  const [system, setSystem] = useState<Theme>('light')

  useEffect(() => {
    setSystem(
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark',
    )
  }, [])

  const src = named ? brands[theme || system] : logo.src
  return <img src={src} height={size} style={style} onClick={onClick} />
}
