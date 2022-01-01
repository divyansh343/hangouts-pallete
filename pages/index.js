import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/pallete">
        <a>
          <span>Explore</span>
          <div className={styles.liquid}></div>
        </a>
      </Link>

    </div>
  )
}
