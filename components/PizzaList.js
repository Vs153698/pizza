import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';
const PizzaList = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                “Anyone who says that money cannot buy happiness has clearly never spent their money on pizza.”
            </p>
            <div className={styles.wrapper}>
                {pizza.map((p) => (<PizzaCard pizza={p} />))}
            </div>
        </div>
    );
}

export default PizzaList;