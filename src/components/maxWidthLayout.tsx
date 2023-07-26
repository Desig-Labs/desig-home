import { ReactNode } from 'react'

import { Col, Row } from 'antd'

const MaxWidthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Row gutter={[24, 24]} style={{ padding: '0px 24px' }} justify="center">
      <Col xs={24} md={22} xl={18}>
        {children}
      </Col>
    </Row>
  )
}

export default MaxWidthLayout
