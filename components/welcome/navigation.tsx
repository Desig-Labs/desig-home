import styles from 'styles/Home.module.css'

export default function Navigation() {
  return (
    <div className={styles.grid}>
      <a
        href="https://www.npmjs.com/package/@desig/core"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Core <span>-&gt;</span>
        </h2>
        <p>
          Find in-depth information about Desig Core, which contains the main
          cryptographical algorithms for the protocol.
        </p>
      </a>

      <a
        href="https://docs.desig.io/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>
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
        <h2>
          @desig/web3 <span>-&gt;</span>
        </h2>
        <p>
          Discover and deploy your projects on the layer-0 of multisig with a
          comprehensive web3 library.
        </p>
      </a>

      <a
        href="http://infra.desig.io/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Infrastructure <span>-&gt;</span>
        </h2>
        <p>
          Wanna become a validator, aka a contributor, aka a node in the Desig
          Infra? You can do it in seconds here!
        </p>
      </a>
    </div>
  )
}
