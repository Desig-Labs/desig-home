import Header from 'components/header'
import styles from 'styles/Home.module.css'
import SEO from 'components/seo'
import Welcome from 'components/welcome'

export default function Home() {
  return (
    <>
      <SEO />
      <main className={styles.main}>
        <Header />
        <Welcome />
      </main>
    </>
  )
}
