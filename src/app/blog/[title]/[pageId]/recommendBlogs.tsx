'use client'
import { Fragment } from 'react'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import { BlogCard } from 'app/blog/listBlog'
import { useBlogs } from 'app/blog/hook/useBlogs'

export type RecommendBlogsProps = {
  pageIds: string[]
}

export default function RecommendBlogs({ pageIds }: RecommendBlogsProps) {
  const {
    data: { metadataMap },
  } = useBlogs()
  if (!metadataMap || pageIds.length <= 0) return <Fragment />

  return (
    <MaxWidthLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Typography.Title level={3}>Related articles</Typography.Title>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 48]}>
            {pageIds.map((pageId) => (
              <Col key={pageId} xs={24} md={8}>
                <BlogCard pageId={pageId} metadata={metadataMap[pageId]} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>

    // <div className="w-full flex flex-row justify-center p-4">
    //   <div className="w-full max-w-[720px] grid grid-cols-12 gap-4 @container">
    //     <div className="col-span-full divider">
    //       <h5 className="opacity-60">Only For You</h5>
    //     </div>
    //     {pageIds.map((pageId) => (
    //       <div
    //         key={pageId}
    //         className="col-span-full @xl:col-span-6 @4xl:col-span-4"
    //       >
    //         <Recommend pageId={pageId} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}
