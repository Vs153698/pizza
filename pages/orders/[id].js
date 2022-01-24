import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from './../../styles/Orders.module.css'
const order = ({pizza}) => {
    console.log("hello",pizza);
    const status = pizza.status;
    const statusclass = (index) => {
        if (index - status < 1) {
            return styles.done
        }
        if (index - status === 1) {
            return styles.inprogress
        }
        if (index - status > 1) {
            return styles.undone
        }
    }
    return (
        <>
            <Head>
                <title>Orders</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.row}>
                        <table className={styles.table}>
                            <tr className={styles.trtitle}>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>

                            </tr>
                            <tr className={styles.tr}>
                                <td>
                                    <span className={styles.id}>{pizza.id}</span>
                                </td>
                                <td>
                                    <span className={styles.name}>
                                        {pizza.customer}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.address}>{pizza.address}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>${pizza.total}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={styles.row}>
                        <div className={statusclass(0)}>
                            <Image src='/img/paid.png' width={30} height={30} alt='' />
                            <span>Payment</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkbutton} src='/img/checked.png' width={20} height={20} alt='' />
                            </div>
                        </div>
                        <div className={statusclass(1)}>
                            <Image src='/img/bake.png' width={30} height={30} alt='' />
                            <span>Preparing</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkbutton} src='/img/checked.png' width={20} height={20} alt='' />
                            </div>
                        </div>
                        <div className={statusclass(2)}>
                            <Image src='/img/bike.png' width={30} height={30} alt='' />
                            <span>On the way</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkbutton} src='/img/checked.png' width={20} height={20} alt='' />
                            </div>
                        </div>
                        <div className={statusclass(3)}>
                            <Image src='/img/delivered.png' width={30} height={30} alt='' />
                            <span>Delivered</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkbutton} src='/img/checked.png' width={20} height={20} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>ORDER SUMMARY</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>${pizza.total}
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>$0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>${pizza.total}
                        </div>
                        <button disabled className={styles.btn}>PAID</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default order;
export const getServerSideProps = async ({ params }) => {
    console.log("id is",params.id);
    const data = await axios.get(`http://localhost:4000/order/${params.id}`)
    console.log("fetch data",data);
    return {
        props: {
            pizza: data.data
        }
    }
}