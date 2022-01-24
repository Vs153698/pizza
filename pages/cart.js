import Head from 'next/head';
import Image from 'next/image';
import styles from './../styles/cart.module.css'
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from '../Redux/cartSlice';
import axios from 'axios';
import OrderDetail from '../components/OrderDetail';
import { useAuth } from '../Context/AuthContext';
const cart = () => {
    const {quantity,products,total,resetcart} = useAuth()
    const cart = products
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const amount = total;
    const currency = "USD";
    const style = { layout: "vertical" };
    const router = useRouter();
    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:4000/order", data);
            if (res.status === 201) {
                setOpen(false)
                resetcart()
                router.push(`/orders/${res.data.id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        console.log(actions);
                        console.log(data);
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: amount,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };
    return (
        <>
            <Head>
                <title>Cart ({quantity})</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.container} >
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
                        {cart.map((prod) => (<tr key={prod._id} className={styles.tr}>
                            <td >
                                <div className={styles.imgcontainer}>
                                    <Image src={prod.img} layout='fill' objectFit='cover' alt="" />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>{prod.title}</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {prod.extras.map((extra) => (
                                        <span key={extra._id}>{extra.text}&nbsp;&nbsp;</span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>${prod.price}</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{prod.quantity}</span>
                            </td>
                            <td>
                                <span className={styles.total}>${prod.price * prod.quantity}</span>
                            </td>
                        </tr>))}
                    </table>
                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>${total}
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Discount:</b>$0.00
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Total:</b>${total}
                        </div>
                        {open ? (
                            <div className={styles.paymentMethods}>
                                <button
                                    className={styles.payButton}
                                    onClick={() => setCash(true)}
                                >
                                    CASH ON DELIVERY
                                </button>
                                <PayPalScriptProvider
                                    options={{
                                        "client-id":"AYvNJAH8_leKpW-MKqcbEqFxGMQemvJ2_zvUOdzIb7Cd28PKNNSRGaDlyKQdf71KPM_YJ_CN71Tw18-T",
                                        components: "buttons",
                                        currency: "USD",
                                        "disable-funding": "credit,card,p24",
                                    }}
                                >
                                    <ButtonWrapper currency={currency} showSpinner={false} />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button onClick={() => setOpen(true)} className={styles.button}>
                                CHECKOUT NOW!
                            </button>
                        )}
                    </div>
                </div>
                {cash && <OrderDetail total={total} createOrder={createOrder} />}
            </div>
        </>
    );
}

export default cart;