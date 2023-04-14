'use client'
import { ParagraphProps } from 'antd/es/typography/Paragraph'
import { TitleProps } from 'antd/es/typography/Title'
import { TextProps } from 'antd/es/typography/Text'

import { Col, Row, Typography } from 'antd'
import Content from './content.mdx'

export default function Policy() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Content
          components={{
            p: (props: ParagraphProps) => <Typography.Paragraph {...props} />,
            h1: (props: TitleProps) => (
              <Typography.Title {...props} level={1} />
            ),
            h2: (props: TitleProps) => (
              <Typography.Title {...props} level={2} />
            ),
            h3: (props: TitleProps) => (
              <Typography.Title {...props} level={3} />
            ),
            h4: (props: TitleProps) => (
              <Typography.Title {...props} level={4} />
            ),
            h5: (props: TitleProps) => (
              <Typography.Title {...props} level={5} />
            ),
            ul: (props: TextProps) => <Typography.Text {...props} />,
            ol: (props: any) => <Typography.Text {...props} />,
          }}
        />
      </Col>
    </Row>
  )
}
