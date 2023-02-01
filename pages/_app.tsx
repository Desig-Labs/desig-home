import 'static/styles/globals.css'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from 'static/styles/Home.module.css'
import Header from 'components/header'
import DesigOg from 'static/images/desig-og.jpg'

export default function App({ Component, pageProps }: AppProps) {
  console.log(DesigOg, DesigOg.src)
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
        {/* Open Graph  */}
        <meta property="og:url" content="http://desig.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Desig: The Decentralized Signature Protocol"
        />
        <meta
          property="og:description"
          content="A chain-neutral (smartcontractless) multisig solution."
        />
        <meta property="og:image" content={DesigOg.src} />
        {/* For twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="desig.io" />
        <meta property="twitter:url" content="http://desig.io/" />
        <meta
          name="twitter:title"
          content="Desig: The Decentralized Signature Protocol"
        />
        <meta
          name="twitter:description"
          content="A chain-neutral (smartcontractless) multisig solution."
        />
        <meta name="twitter:image" content={DesigOg.src} />
        {/* Google Font */}
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
