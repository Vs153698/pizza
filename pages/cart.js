import Head from 'next/head';
import Image from 'next/image';
import styles from './../styles/cart.module.css'
const cart = () => {
    return (
        <>
            <Head>
                <title>Cart (5)</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <table className={styles.table}>
                        <tr className={styles.trtitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgcontainer}>
                                    <Image src="/img/p1.png" layout='fill' objectFit='cover' alt=""/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.20</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>$0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>$79.60
                        </div>
                        <button className={styles.btn}>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default cart;