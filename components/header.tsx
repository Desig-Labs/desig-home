import { Button, Card, Col, Row, Space, Switch, Typography } from 'antd'
import Desig from './desig'

import { useTheme } from 'providers/ui.provider'
import { TwitterOutlined } from '@ant-design/icons'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <Row gutter={[24, 24]} wrap={false} align="middle">
      <Col flex="auto">
        <Desig />
      </Col>
      <Col>
        <Card bodyStyle={{ padding: 12 }}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Space>
                <Button type="text" icon={<TwitterOutlined />} />
                <Typography.Link
                  href="https://twitter.com/DesigLabs"
                  target="_blank"
                >
                  @DesigLabs
                </Typography.Link>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col>
        <Switch
          checked={theme === 'dark'}
          onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
      </Col>
    </Row>
  )
}
