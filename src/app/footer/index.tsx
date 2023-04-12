'use client'

import { Col, Row, Switch, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import styles from './index.module.scss'
import { useTheme } from 'providers/ui.provider'

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <Row className={styles.footer} gutter={[24, 24]} align="middle">
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
