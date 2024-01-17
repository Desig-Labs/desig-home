'use client'
import { useRouter } from 'next/navigation'

import { Image, Space, Button } from 'antd'
import IonIcon from 'components/ionicon'
import { normalizePageTitle } from 'app/api/utils'

export type HeroProps = {
  pageId: string
  metadataMap: PageMap
}

export default function Hero({ pageId, metadataMap }: HeroProps) {
  const { back } = useRouter()
  const { thumbnail, slug } = metadataMap[pageId]

  return (
    <Space direction="vertical" className="header-details" size={20}>
      <Button onClick={back} type="text" className="btn-forward" size="large">
        <IonIcon name="chevron-back-outline" /> Back
      </Button>
      <Image
        preview={false}
        src={thumbnail}
        alt={normalizePageTitle(slug)}
        className="hero-image"
      />
    </Space>
  )
}
