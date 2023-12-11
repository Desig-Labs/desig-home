'use client'
import { CSSProperties } from 'react'

import Image from 'next/image'

import logo from './logo.svg'
import light from './brand-in-light.svg'
import dark from './brand-in-dark.svg'

const brands: Record<string, any> = {
  light,
  dark,
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
}: BrandProps) {
  const src = named ? brands['dark'] : logo
  return (
    <Image
      alt="desig-brand"
      src={src}
      height={size}
      style={style}
      onClick={onClick}
    />
  )
}
