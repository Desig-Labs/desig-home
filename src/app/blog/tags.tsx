'use client'
import { Space, Tag } from 'antd'
import { useBlogs } from './hook/useBlogs'
import { Fragment } from 'react'

export type TagsProps = {
  pageId: string
}

export default function Tags({ pageId }: TagsProps) {
  const {
    data: { metadataMap },
  } = useBlogs()
  if (!metadataMap) return <Fragment />

  const { tags } = metadataMap[pageId]

  return (
    <Space size={8}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          color="purple"
          style={{
            color: '#E3B4FA',
            padding: '2px 8px',
            marginInlineEnd: 0,
          }}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  )
}
