type Theme = 'light' | 'dark'

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any
    'model-viewer': any
  }
}

type PageMetadata = {
  title: string
  publishedAt: number
  tags: string[]
  description: string
  thumbnail: string
  pinned: boolean
  slug: string
}

type PageMap = Record<string, PageMetadata>
