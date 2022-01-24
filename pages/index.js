import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'
import { useAuth } from '../Context/AuthContext'

export default function Home({pizza,admin}) {
  const [open, setOpen] = useState(false)
  const {currentuser} = useAuth()
  return (
    <div>
      <Head>
        <title>Pizza-Home {currentuser && currentuser.email}</title>
        <meta name="description" content="Best pizza delivering services in town" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet"/>
      </Head>
      <Slider/>
      {admin && <AddButton setOpen={setOpen}/>}
      {open && <Add setOpen={setOpen}/> }
      <PizzaList pizza={pizza}/>
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const mycookie = ctx.req?.cookies || ""
  let admin = false
  if (mycookie.token === process.env.TOKEN) {
    admin = true;
  }
  const data = await axios.get('http://localhost:4000/')
  return {
    props:{
      pizza:data.data,
      admin
    }
  }
}