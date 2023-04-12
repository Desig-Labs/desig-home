import type { AppProps } from 'next/app'

import UiProvider from 'providers/ui.provider'

import 'styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
}
