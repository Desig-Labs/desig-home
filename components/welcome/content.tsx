import styles from 'styles/Home.module.css'

export default function Content() {
  return (
    <>
      <div className={styles.center}>
        <h1>Coming Soon</h1>
      </div>
      <a
        href="mailto:hi@desig.io"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: 24 }}
      >
        👋 hi@desig.io
      </a>
    </>
  )
}
