import 'styles/globals.css'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import Header from 'components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desig</title>
        <meta
          name="description"
          content="A chain-neutral (smartcontractless) multisig solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
