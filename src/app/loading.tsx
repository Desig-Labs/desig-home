'use client'
import { LoadingOutlined } from '@ant-design/icons'
import { Col, Row, Space, Spin } from 'antd'
import Desig from 'components/desig'

export default function Loading() {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col style={{ marginTop: '35vh' }}>
        <Space direction="vertical" align="center">
          <Desig />
          <Spin size="large" indicator={<LoadingOutlined />} spinning />
        </Space>
      </Col>
    </Row>
  )
}
