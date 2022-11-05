import styles from './page.module.css'
import Stepper from './Stepper/stepper'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Matulator</h1>
        <Stepper />
      </main>
    </div>
  )
}
