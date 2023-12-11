import { CSSProperties, ReactNode } from 'react'

import { Card, Image } from 'antd'

type CardLogoProps = {
  src?: string
  width?: number
  style?: CSSProperties
  children?: ReactNode
  className?: string
}
const CardLogo = ({
  src = '',
  width = 240,
  style,
  children = <Image src={src} width={width} alt="partner" preview={false} />,
  className,
}: CardLogoProps) => {
  return (
    <Card
      className={className}
      style={{
        background: '#26262B',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        ...style,
      }}
      bodyStyle={{ height: '100%' }}
      bordered={false}
    >
      {children}
    </Card>
  )
}

export default CardLogo
