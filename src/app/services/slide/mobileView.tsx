import { Col, Row, Space, Typography } from 'antd'
import { MOCKUP_DESIG_SERVICE } from './mockup'
import Image from 'next/image'

export default function MobileView() {
  return (
    <Row gutter={[0, 100]}>
      {MOCKUP_DESIG_SERVICE.map(({ desc, img, title }, idx) => (
        <Col span={24} key={idx}>
          <Space
            direction="vertical"
            align="center"
            style={{ width: '100%', textAlign: 'center' }}
            size={12}
          >
            <Image src={img} width={220} height={220} alt="desig service" />
            <div />
            <Typography.Title>{title}</Typography.Title>
            <Typography.Text type="secondary">{desc}</Typography.Text>
          </Space>
        </Col>
      ))}
    </Row>
  )
}
