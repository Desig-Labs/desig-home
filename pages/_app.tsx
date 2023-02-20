import 'static/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from 'static/styles/Home.module.css'
import Header from 'components/header'
import DesigOg from 'static/images/desig-og.jpg'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desig</title>
        <meta
          name="description"
          content="A blockchain-agnostic (smartcontractless) multisig solution"
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
          content="A blockchain-agnostic (smartcontractless) multisig solution."
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
          content="A blockchain-agnostic (smartcontractless) multisig solution."
        />
        <meta name="twitter:image" content={DesigOg.src} />
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R91HV8NWFY"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R91HV8NWFY');
          `}
        </Script>
      </Head>
      <main className={styles.main}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
