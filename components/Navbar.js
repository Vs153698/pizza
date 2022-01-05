import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callbutton}>
                    {/* if we are using Image container width and height are necessary  */}
                    <Image src='/img/telephone.png' alt='' width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW !</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listitem}>Homepage</li>
                    <li className={styles.listitem}>Products</li>
                    <li className={styles.listitem}>Menu</li>
                    <h1 className={styles.mainlogo}>PizzaBar</h1>
                    <li className={styles.listitem}>Events</li>
                    <li className={styles.listitem}>Blog</li>
                    <li className={styles.listitem}>Contacts</li>
                </ul>
            </div>
            <div className={styles.cart}>
                <div>
                    <Image src='/img/cart.png' alt="" width="30px" height='30px'/>
                </div>
                <div className={styles.counter}>2</div>
            </div>
        </div>
    );
}

export default Navbar;