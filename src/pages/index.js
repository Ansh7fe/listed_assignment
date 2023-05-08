import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Login from './login'

export default function Home () {
  return (
    <>
      <Head>
        <title>Listed</title>
      </Head>
      <main className={styles.main}>
        <Login />
      </main>
    </>
  )
}
