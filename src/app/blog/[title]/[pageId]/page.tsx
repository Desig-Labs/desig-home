'use client'
import { useRouter } from 'next/navigation'
import { NotionRenderer } from 'react-notion-x'
import { Tweet } from 'react-tweet'

import { Equation } from './equation'
import PageCollection from './collection'
import { Skeleton, Button, Space } from 'antd'
import IonIcon from 'components/ionicon'

import { useBlogPage } from 'app/blog/hook/useBlogs'
import RecommendBlogs from './recommendBlogs'

export default function Page({
  params: { pageId },
}: {
  params: { pageId: string }
}) {
  const { back } = useRouter()
  const {
    data: { map, recommends },
  } = useBlogPage(pageId)

  if (!map || !recommends) return <Skeleton active />
  return (
    <NotionRenderer
      recordMap={map}
      fullPage={true}
      header={null}
      darkMode
      className="body-blog-details"
      components={{
        Header: () => (
          <Space className="header-notion">
            <Button
              onClick={back}
              type="text"
              className="btn-forward"
              size="large"
            >
              <IonIcon name="chevron-back-outline" /> Back
            </Button>
          </Space>
        ),

        Collection: () => <PageCollection pageId={pageId} />,
        Tweet,
        Equation,
      }}
      footer={<RecommendBlogs pageIds={recommends} />}
    />
  )
}
