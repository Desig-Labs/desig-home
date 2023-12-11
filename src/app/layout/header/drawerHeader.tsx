import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import { Button, Drawer, List, Typography } from 'antd'
import IonIcon from 'components/ionicon'
import Brand from 'components/brand'

import { SECTIONS_LIST } from '.'

const DrawerHeader = () => {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  return (
    <Fragment>
      <Button
        className="btn-menu"
        size="large"
        onClick={() => setVisible(true)}
        icon={<IonIcon name="menu-outline" />}
      />

      <Drawer
        title={<Brand size={32} theme="dark" style={{ cursor: 'pointer' }} />}
        footer={
          <Button
            size="large"
            block
            className="ant-btn-primary"
            icon={<IonIcon name="key-outline" />}
          >
            Get Early Access
          </Button>
        }
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        className="header-drawer"
      >
        <List
          dataSource={SECTIONS_LIST}
          renderItem={({ title, route }) => (
            <List.Item
              onClick={() => router.push(route)}
              style={{ cursor: 'pointer' }}
            >
              <Typography.Title level={5}>{title}</Typography.Title>
            </List.Item>
          )}
        />
      </Drawer>
    </Fragment>
  )
}

export default DrawerHeader
