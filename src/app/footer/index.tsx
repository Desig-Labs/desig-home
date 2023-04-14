'use client'
import Link from 'next/link'

import { Button, Col, Divider, Row, Space, Typography } from 'antd'
import IonIcon from 'components/ionicon'
import Brand from 'components/brand'

import styles from './index.module.scss'
import { useTheme } from 'providers/ui.provider'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <Row className={styles.footer} gutter={[36, 36]} justify="center">
      <Col flex="auto">
        <Space>
          <Brand size={16} theme={theme} />
          <Divider type="vertical" />
          <Space direction="vertical">
            <Typography.Text className="caption" strong>
              The blockchain-agnostic multisig solution.
            </Typography.Text>
            <Typography.Text className="caption" type="secondary">
              Desig © 2023, All Rights Reserved.
            </Typography.Text>
          </Space>
        </Space>
      </Col>
      <Col>
        <Space direction="vertical" align="end">
          <Typography.Text type="secondary" strong>
            DOWNLOAD
          </Typography.Text>
          <Space style={{ marginRight: -4 }}>
            <Button
              size="small"
              type="text"
              icon={<IonIcon name="logo-chrome" />}
            />
            <Button
              size="small"
              type="text"
              icon={<IonIcon name="logo-apple" />}
              disabled
            />
            <Button
              size="small"
              type="text"
              icon={<IonIcon name="logo-android" />}
              disabled
            />
          </Space>
        </Space>
      </Col>
      <Col>
        <Space direction="vertical" align="end">
          <Typography.Text type="secondary" strong>
            FOLLOW US
          </Typography.Text>
          <Space style={{ marginRight: -4 }}>
            <Button
              size="small"
              type="text"
              icon={<IonIcon name="logo-twitter" />}
              href="https://twitter.com/DesigLabs"
              target="_blank"
            />
            <Button
              size="small"
              type="text"
              icon={<IonIcon name="logo-github" />}
              href="https://github.com/Desig-Labs"
              target="_blank"
            />
          </Space>
        </Space>
      </Col>
      <Col>
        <Space direction="vertical" align="end">
          <Typography.Text type="secondary" strong>
            LEGAL
          </Typography.Text>
          <Link href="/policy">
            <Typography.Text>Policy</Typography.Text>
          </Link>
        </Space>
      </Col>
    </Row>
  )
}
