import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import Header from 'components/header'
import Footer from 'components/footer'
import UiProvider from 'providers/ui.provider'
import Web3Provider from 'providers/web3.provider'

import 'public/styles/index.scss'
import DesigOg from 'public/images/desig-og.jpg'

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
      </Head>
      <main>
        <UiProvider>
          <Web3Provider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Web3Provider>
        </UiProvider>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R91HV8NWFY"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R91HV8NWFY');
        `}</Script>
      </main>
    </>
  )
}
