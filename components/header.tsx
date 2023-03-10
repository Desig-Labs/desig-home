import {
  Button,
  Card,
  Col,
  Popover,
  Row,
  Space,
  Switch,
  Typography,
} from 'antd'
import Desig from './desig'

import { useTheme } from 'providers/ui.provider'
import IonIcon from '@sentre/antd-ionicon'

export default function Header() {
  const { theme, setTheme } = useTheme()

  const onHome = () => (window.location.href = window.location.origin)

  return (
    <Row gutter={[8, 8]} wrap={false} align="middle">
      <Col flex="auto">
        <Desig onClick={onHome} style={{ cursor: 'pointer' }} />
      </Col>
      <Col>
        <Card bodyStyle={{ padding: '8px 12px' }}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Typography.Link
                href="https://twitter.com/DesigLabs"
                target="_blank"
              >
                <Space>
                  <IonIcon name="logo-twitter" />
                  @DesigLabs
                </Space>
              </Typography.Link>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col>
        <Popover
          trigger={['click']}
          arrow={false}
          content={
            <Row gutter={[12, 12]} style={{ width: 256 }}>
              <Col span={24}>
                <Row gutter={[12, 12]} wrap={false} align="middle">
                  <Col flex="auto">Theme Mode</Col>
                  <Col>
                    <Switch
                      checked={theme === 'dark'}
                      onChange={(checked) =>
                        setTheme(checked ? 'dark' : 'light')
                      }
                      unCheckedChildren={<IonIcon name="sunny-outline" />}
                      checkedChildren={<IonIcon name="moon-outline" />}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          }
        >
          <Button
            type="primary"
            size="large"
            icon={<IonIcon name="menu-outline" />}
          />
        </Popover>
      </Col>
    </Row>
  )
}
