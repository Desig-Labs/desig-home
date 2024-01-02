export type PricingContentData = {
  icon: string
  value: string | string[]
}

export type PricingData = {
  title: string
  description: string
  amount: number
  symbol: string
  content: PricingContentData[]
  color: string
}

export const Standard: PricingData = {
  title: 'Standard',
  description: 'For individuals on personal workspaces',
  amount: 129,
  symbol: '$',
  content: [
    {
      icon: 'people-outline',
      value: 'Up to 3 users',
    },
    {
      icon: 'lock-open-outline',
      value: [
        'Features access',
        'White-labeling',
        'Push notifications',
        'Zero on-chain fees',
        'Blockchain-agnostic',
        'dApp-compatible',
      ],
    },

    {
      icon: 'chatbubbles-outline',
      value: 'Community support',
    },
    {
      icon: 'extension-puzzle-outline',
      value: '$49 per plugin',
    },
  ],
  color: '#E3B4FA',
}

export const Advanced: PricingData = {
  title: 'Advanced',
  description: 'For individuals on personal workspaces',
  amount: 199,
  symbol: '$',
  content: [
    {
      icon: 'people-outline',
      value: 'Up to 9 users',
    },
    {
      icon: 'lock-open-outline',
      value: ['Everything from standard, plugs: ', 'Critical Email Alert'],
    },

    {
      icon: 'chatbubbles-outline',
      value: 'Technical Support from our Team',
    },
    {
      icon: 'extension-puzzle-outline',
      value: '$49 per plugin',
    },
  ],
  color: '#F5A489',
}

export const Custom: PricingData = {
  title: 'Custom',
  description: 'For individuals on personal workspaces',
  amount: 0,
  symbol: 'Contact us',
  content: [
    {
      icon: 'people-outline',
      value: 'User unlimited',
    },
    {
      icon: 'lock-open-outline',
      value: ['Everything from Advanced, plugs: ', 'Customizable UI Design'],
    },

    {
      icon: 'chatbubbles-outline',
      value: 'Technical Support from our Team',
    },
    {
      icon: 'extension-puzzle-outline',
      value: '$49 per plugin',
    },
  ],
  color: '#ADA4FA',
}
