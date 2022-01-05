import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css'
const PizzaCard = (props) => {
    return (
        <div className={styles.container}>
            <Image src={props.img} alt='' width='500' height='500'/>
            <div className={styles.title}>FIORI DI ZUCA</div>
            <span className={styles.price}>$19.90</span>
            <div className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </div>
    );
}

export default PizzaCard;