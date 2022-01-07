import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './../../styles/ProductDetail.module.css'
const ProductDetail = () => {
    const [size, setSize] = useState(0)
    const pizza = {
        id: 1,
        img: "/img/p1.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa repellendus repellat sequi amet temporibus quos."
    }
    return (
        <>
            <Head>
                <title>Buy Now</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.imgcontainer}>
                        <Image src={pizza.img} layout='fill' alt='' />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{pizza.name}</div>
                    <span className={styles.price}>${pizza.price[size]}</span>
                    <p className={styles.desc}>{pizza.desc}</p>
                    <h3 className={styles.choose}>Choose the size</h3>
                    <div className={styles.sizes}>
                        <div className={styles.size} onClick={() => setSize(0)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Small</span>
                        </div>
                        <div className={styles.size} onClick={() => setSize(1)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Medium</span>
                        </div>
                        <div className={styles.size} onClick={() => setSize(2)}>
                            <Image src="/img/size.png" layout='fill' alt='' />
                            <span className={styles.number}>Large</span>
                        </div>
                    </div>
                    <h3 className={styles.choose}>Choose additional ingredients</h3>
                    <div className={styles.ingredients}>

                    <div className={styles.option}>
                        <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="Cheese" id="Cheese" className={styles.checkbox} />
                        <label htmlFor="Cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    </div>
                    <div className={styles.add}>
                        <input type="number" defaultValue={1} className={styles.quantity} min={1} />
                        <button className={styles.button}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;