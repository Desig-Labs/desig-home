'use client'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import { TitleProps } from 'antd/es/typography/Title'
import { TextProps } from 'antd/es/typography/Text'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Content from './content.mdx'

export default function Policy() {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Content
            components={{
              p: (props: ParagraphProps) => (
                <Typography.Paragraph {...props} className="reset" />
              ),
              h1: (props: TitleProps) => (
                <Typography.Title {...props} level={1} className="reset" />
              ),
              h2: (props: TitleProps) => (
                <Typography.Title {...props} level={2} className="reset" />
              ),
              h3: (props: TitleProps) => (
                <Typography.Title {...props} level={3} className="reset" />
              ),
              h4: (props: TitleProps) => (
                <Typography.Title {...props} level={4} className="reset" />
              ),
              h5: (props: TitleProps) => (
                <Typography.Title {...props} level={5} className="reset" />
              ),
              ul: (props: TextProps) => (
                <Typography.Text {...props} className="reset" />
              ),
              ol: (props: any) => (
                <Typography.Text {...props} className="reset" />
              ),
            }}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}
