import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/admin.module.css'
import axios from 'axios';
import { useState } from 'react';
const admin = ({orderhello,pizzahello}) => {
    const [pizza, setPizza] = useState(pizzahello)
    const [order, setOrder] = useState(orderhello)
    const status = ['Paid','Preparing','On the way','Delivered','Closed']
    const handleDelete =async(id)=>{
        try {
            const res = await axios.delete("http://localhost:3000/api/products/"+id)
            setPizza(pizza.filter((p)=>p._id !== id))
        } catch (error) {
            console.log(error)
        }
    }
     
    const handleStatus = async(id,status)=>{
        if (status >2 ) {
            status = 2
        }
        try {
           const res = await axios.put("http://localhost:3000/api/orders/"+id,{status:parseInt(status) + 1}) 
           setOrder([
               res.data,...order.filter((o)=>o._id !== id)
           ])
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <Head>
                <title>Admin</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trtitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizza.map((p)=>(<tr key={p._id} className={styles.trtitle}>
                            <td><Image src={p.img} width={50} height={50} objectFit='cover'/></td>
                            <td>{p._id.slice(0,6)}...</td>
                            <td>{p.title}</td>
                            <td>${p.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button} onClick={()=>handleDelete(p._id)}>Delete</button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.trtitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {order.map((o)=>(
                                    <tr key={o._id} className={styles.trtitle}>
                                    <td>{o._id}</td>
                                    <td>{o.customer}</td>
                                    <td>${o.total}</td>
                                    <td>{o.method === 0 ? (<span>cash</span>):(<span>paid</span>)}</td>
                                    <td>{status[parseInt(o.status) + 1]}</td>
                                    <td><button onClick={()=>handleStatus(o._id,o.status)} disabled={o.status >= 3 ? true : false} className={styles.btn}>Next Stage</button></td>
                                    
                                </tr>
                       )) }
                    </tbody>
                </table>
            </div>
        </div>
                    </>
    );
}

export default admin;
export const getServerSideProps = async (ctx) => {
    const productList = await axios.get('http://localhost:3000/api/products')
    const orderList = await axios.get('http://localhost:3000/api/orders')
    return {
        props:{
            orderhello:orderList.data,
            pizzahello:productList.data
        }
    }
}