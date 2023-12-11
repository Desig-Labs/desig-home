import { ThemeConfig } from 'antd'

export const COLORS = {
  PRIMARY: '#7767F6',
  DARK_PURPLE: '#5746DB',
  BG_COLORS: '#0B081E',

  TRANSPARENT: 'transparent',
  NONE: 'none',
}

export const THEME_CONFIG: ThemeConfig = {
  token: {
    colorPrimary: COLORS.PRIMARY,
    colorPrimaryHover: COLORS.DARK_PURPLE,
    colorBgBase: COLORS.BG_COLORS,
    borderRadius: 16,
  },

  components: {
    Card: {
      borderRadiusLG: 24,
      colorBorder: COLORS.TRANSPARENT,
      boxShadow: COLORS.NONE,
      lineWidth: 1.5,
      paddingLG: 24,
    },

    Button: {
      borderRadiusLG: 16,
      controlHeightLG: 48,
      borderRadius: 12,
      fontSizeLG: 14,
      colorLink: COLORS.PRIMARY,
      colorLinkHover: COLORS.BG_COLORS,
    },
  },
}
