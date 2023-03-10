/// <reference types="react-scripts" />

declare module '*.md' {
  const value: string
  export default value
}

interface Window {
  ethereum: any
}

type Theme = 'light' | 'dark'
