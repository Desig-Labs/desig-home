import { CSSProperties, ReactNode } from 'react'

import { Col, Row } from 'antd'

export const MAX_SCREEN_WIDTH = 1200

const MaxWidthLayout = ({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) => {
  return (
    <Row
      gutter={[24, 24]}
      style={{ padding: '0px 24px', ...style }}
      justify="center"
    >
      <Col style={{ width: '100%', maxWidth: MAX_SCREEN_WIDTH }}>
        {children}
      </Col>
    </Row>
  )
}

export default MaxWidthLayout
