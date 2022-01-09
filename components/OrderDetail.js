import { useState } from 'react';
import styles from '../styles/OrderDetail.module.css'
const OrderDetail = ({total,createOrder}) => {
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")
    const handleclick = ()=>{
        createOrder({total,customer,address,method:0})
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay ${total} after delivery.</h1>
                <div className={styles.item}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id='name' placeholder='John doe' onChange={(e)=>setCustomer(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input type="text" id='phone' placeholder='+222 555 888' onChange={(e)=>setCustomer(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label htmlFor="add" className={styles.label}>Address</label>
                    <input type="text" id='add' placeholder='Kota Rajasthan' onChange={(e)=>setAddress(e.target.value)} className={styles.input} />
                </div>
                <button className={styles.button} onClick={handleclick}>Order Now!</button>
            </div>
        </div>
    );
}

export default OrderDetail;