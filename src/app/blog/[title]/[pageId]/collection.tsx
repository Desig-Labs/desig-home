'use client'
import { Fragment } from 'react'
import dayjs from 'dayjs'

import IonIcon from 'components/ionicon'
import Tags from 'app/blog/tags'
import { Col, Row, Space, Typography } from 'antd'

import { useBlogs } from 'app/blog/hook/useBlogs'

export type PageCollectionProps = {
  pageId: string
}

export default function PageCollection({ pageId }: PageCollectionProps) {
  const {
    data: { metadataMap },
  } = useBlogs()
  if (!metadataMap) return <Fragment />

  const { publishedAt } = metadataMap[pageId]

  return (
    <Row gutter={[8, 8]} style={{ marginBottom: 32 }}>
      <Col span={24}>
        <Space>
          <IonIcon name="calendar-clear-outline" />
          <Typography.Text>
            {dayjs(publishedAt).format('MMMM DD, YYYY')}
          </Typography.Text>
        </Space>
      </Col>
      <Col span={24}>
        <Space>
          <IonIcon name="pricetag-outline" />
          <Tags pageId={pageId} />
        </Space>
      </Col>
    </Row>
  )
}
