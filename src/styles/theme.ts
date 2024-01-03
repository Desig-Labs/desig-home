import { ThemeConfig } from 'antd/es/config-provider/context'
import { THEME_CONFIG, COLORS } from './vars'

import { theme } from 'antd'

export const generateTheme = (): ThemeConfig => ({
  algorithm: theme.darkAlgorithm,
  token: {
    ...THEME_CONFIG.token,
    ...THEME_CONFIG.components,
    colorPrimary: COLORS.PRIMARY,
    fontFamily: "'Satoshi', sans-serif",
  },
})
