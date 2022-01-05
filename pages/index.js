import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza-Home</title>
        <meta name="description" content="Best pizza delivering services in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      Home
   
    </div>
  )
}