import { usePathname, useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import { Button, Drawer, List } from 'antd'
import IonIcon from 'components/ionicon'
import Brand from 'components/brand'

import { SECTIONS_LIST } from '.'

import './index.scss'

const DrawerHeader = () => {
  const [visible, setVisible] = useState(false)
  const router = useRouter()
  const path = usePathname()

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
        width={350}
      >
        <List
          dataSource={SECTIONS_LIST}
          renderItem={({ title, route, disabled }) => (
            <List.Item
              onClick={() => {
                router.push(route)
                setVisible(false)
              }}
            >
              <Button
                type="text"
                block
                style={{ fontSize: 18, textAlign: 'start' }}
                disabled={disabled}
                className={path === route ? 'tab active' : 'tab'}
              >
                {title}
              </Button>
            </List.Item>
          )}
        />
      </Drawer>
    </Fragment>
  )
}

export default DrawerHeader
