import { Col, Row, Switch, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useTheme } from 'providers/ui.provider'

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <Row
      gutter={[24, 24]}
      style={{ marginTop: 64, marginBottom: 32 }}
      wrap={false}
      align="middle"
    >
      <Col flex="auto">
        <Typography.Text type="secondary">
          Desig © 2023, All Rights Reserved.
        </Typography.Text>
      </Col>
      <Col>
        <Switch
          checked={theme === 'dark'}
          onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          unCheckedChildren={<IonIcon name="sunny-outline" />}
          checkedChildren={<IonIcon name="moon-outline" />}
        />
      </Col>
    </Row>
  )
}
