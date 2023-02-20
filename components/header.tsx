import styles from 'public/styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.description}>
      <p onClick={() => window.open('https://twitter.com/DesigLabs', '_blank')}>
        Follow us and stay updated at&nbsp;
        <code className={styles.code}>@DesigLabs</code>
      </p>
      <div>
        <a href="https://desig.io/">Desig</a>
      </div>
    </div>
  )
}
