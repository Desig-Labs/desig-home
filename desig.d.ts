type Theme = 'light' | 'dark'

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any
    'model-viewer': any
  }
}

declare module '*.glb' {
  const content: any
  export default content
}
