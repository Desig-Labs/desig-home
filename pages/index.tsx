import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p
            onClick={() =>
              window.open('https://twitter.com/DesigLabs', '_blank')
            }
          >
            Follow us and stay updated at&nbsp;
            <code className={styles.code}>@DesigLabs</code>
          </p>
          <div>
            <a href="https://desig.io/">Desig</a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>Comming Soon</h1>
        </div>
        <a href="mailto:hi@desig.io" target="_blank" rel="noopener noreferrer">
          👋 hi@desig.io
        </a>

        <div className={styles.grid}>
          <a
            href="https://www.npmjs.com/package/@desig/core"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Core <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Desig Core, which contains the
              main cryptographical algorithms for the protocol.
            </p>
          </a>

          <a
            href="https://docs.desig.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Desig in a well-written document, a whitepaper, and a
              yellowpaper.
            </p>
          </a>

          <a
            href="https://web3.desig.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              @desig/web3 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy your projects on the layer0 of multisig with
              the comprehensive web3 library.
            </p>
          </a>

          <a
            href="http://infra.desig.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Infrastructure <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Wanna become a validator, aka a contributor, aka a node in the
              Desig Infra? You can do it in a second here!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
