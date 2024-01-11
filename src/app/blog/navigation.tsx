'use client'
import { useState } from 'react'

import { Tabs } from 'antd'
import ListBlog from './listBlog'

export type NavigationProps = {
  pageIds: string[]
  metadataMap: PageMap
}

export default function Navigation({ pageIds, metadataMap }: NavigationProps) {
  const [activeTab, setActiveTab] = useState('')

  return (
    <Tabs
      onChange={(key) => setActiveTab(key)}
      className="blog-tabs"
      defaultActiveKey={activeTab}
      activeKey={activeTab}
      items={[
        {
          key: '',
          label: 'News',
          children: (
            <ListBlog category="" pageIds={pageIds} metadataMap={metadataMap} />
          ),
        },
        {
          key: 'campaign',
          label: 'Campaign',
          children: (
            <ListBlog
              category="Campaign"
              pageIds={pageIds}
              metadataMap={metadataMap}
            />
          ),
        },
        {
          key: 'desig-101',
          label: 'Desig 101',
          children: (
            <ListBlog
              category="Desig 101"
              pageIds={pageIds}
              metadataMap={metadataMap}
            />
          ),
        },
        {
          key: 'technology',
          label: 'Technology',
          children: (
            <ListBlog
              category="Technology"
              pageIds={pageIds}
              metadataMap={metadataMap}
            />
          ),
        },
        {
          key: 'lab-updates',
          label: 'Lab Updates',
          children: (
            <ListBlog
              category="Lab Updates"
              pageIds={pageIds}
              metadataMap={metadataMap}
            />
          ),
        },
      ]}
    />
  )
}
