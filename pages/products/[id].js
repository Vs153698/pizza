import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './../../styles/ProductDetail.module.css'
import {useAuth} from '../../Context/AuthContext'
const ProductDetail = ({ pizza }) => {
    const {addproduct} = useAuth()
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(pizza.prices[0])
    const [extras, setExtras] = useState([])
    const [quantity, setQuantity] = useState(1)
    const changeprice = (number) => {
        setPrice(price + number)
    }
    const handlesize = (sizeIndex) => {
        const differences = pizza.prices[sizeIndex] - pizza.prices[size]
        setSize(sizeIndex)
        changeprice(differences)
    }
    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changeprice(option.price)
            setExtras([...extras, option])
        } else {
            changeprice(-option.price)
            setExtras(extras.filter((extra) => extra._id !== option._id))
        }
    }
    const handlecart = ()=>{
        addproduct({...pizza,extras,price,quantity})
    }
    return (
        <>
            <Head>
                <title>{pizza.title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgcontainer}>
                        <Image src={pizza.img} layout='fill' alt='' />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{pizza.title}</div>
                    <span className={styles.price}>${price}</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={() => handlesize(0)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Small</span>
                        </div>
                        <div className={styles.size} onClick={() => handlesize(1)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Medium</span>
                        </div>
                        <div className={styles.size} onClick={() => handlesize(2)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose additional ingredients</h3>
                    <div className={styles.ingredients}>
                        {pizza.extrasOptions.map((p, index) => (
                            <div className={styles.option} key={index}>
                                <input type="checkbox" max={5}  name={p.text} id={p.text} className={styles.checkbox} onChange={(e) => handleChange(e, p)} />
                                <label htmlFor={p.text}>{p.text}</label>
                            </div>
                        ))}
                    </div>
                    <div className={styles.add}>
                        <input type="number" onChange={(e) => { setQuantity(e.target.value) }} value={quantity} defaultValue={1} className={styles.quantity} min={1} />
                        <button onClick={handlecart} className={styles.button}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
export const getServerSideProps = async ({ params }) => {

    const data = await axios.get(`http://localhost:4000/${params.id}`)
    return {
        props: {
            pizza: data.data
        }
    }
}