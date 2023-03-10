import { Col, Row, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

import policy from './policy.md'
import { useMarkdown } from 'hooks/useMarkdown'

export default function Policy() {
  const content = useMarkdown(policy)

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <ReactMarkdown
          skipHtml={false}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            p: ({ node, ...props }) => <Typography.Paragraph {...props} />,
            h1: ({ node, ...props }) => (
              <Typography.Title {...props} level={1} />
            ),
            h2: ({ node, ...props }) => (
              <Typography.Title {...props} level={2} />
            ),
            h3: ({ node, ...props }) => (
              <Typography.Title {...props} level={3} />
            ),
            h4: ({ node, ...props }) => (
              <Typography.Title {...props} level={4} />
            ),
            h5: ({ node, ...props }) => (
              <Typography.Title {...props} level={5} />
            ),
            ul: ({ node, ...props }: any) => <Typography.Text {...props} />,
            ol: ({ node, ...props }: any) => <Typography.Text {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </Col>
    </Row>
  )
}
