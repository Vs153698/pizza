import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css'
const PizzaCard = ({pizza}) => {
    return (
        <Link href={`/products/${pizza.id}`} passHref>
        <div className={styles.container}>
            <Image src={pizza.img} alt='' width='500' height='500'/>
            <div className={styles.title}>{pizza.title}</div>
            <span className={styles.price}>${pizza.prices[0]}</span>
            <div className={styles.desc}>
                {pizza.desc}
            </div>
        </div>
        </Link>
    );
}

export default PizzaCard;