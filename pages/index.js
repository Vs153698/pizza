import Head from 'next/head'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza-Home</title>
        <meta name="description" content="Best pizza delivering services in town" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet"/>
      </Head>
      <Slider/>
      <PizzaList/>
    </div>
  )
}