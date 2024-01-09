'use client'
import { useRouter } from 'next/navigation'

import { Image, Space, Button } from 'antd'
import IonIcon from 'components/ionicon'

export type HeroProps = {
  pageId: string
  metadataMap: PageMap
}

export default function Hero({ pageId, metadataMap }: HeroProps) {
  const { back } = useRouter()
  const { thumbnail } = metadataMap[pageId]

  return (
    <Space direction="vertical" className="header-notion" size={20}>
      <Button onClick={back} type="text" className="btn-forward" size="large">
        <IonIcon name="chevron-back-outline" /> Back
      </Button>
      <Image
        preview={false}
        src={thumbnail}
        alt="hero"
        className="hero-image"
      />
    </Space>
  )
}
