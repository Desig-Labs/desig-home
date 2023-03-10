import { ThemeConfig } from 'antd/es/config-provider/context'

import { theme } from 'antd'

export const generateTheme = (mode: Theme): ThemeConfig => ({
  algorithm: mode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
  token: {
    colorPrimary: '#7767F6',
    fontFamily: "'Satoshi', sans-serif",
  },
})
