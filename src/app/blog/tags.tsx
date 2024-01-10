'use client'
import { Fragment } from 'react'

import { Space, Tag } from 'antd'

import { useBlogs } from './hook/useBlogs'

export type TagsProps = {
  pageId: string
}

const COLORS_TAG_BLOG: Record<string, string> = {
  Campaign: 'blue',
  'Desig 101': 'purple',
  Technology: 'green',
  'Lab Updates': 'orange',
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
          color={COLORS_TAG_BLOG[tag]}
          style={{
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
