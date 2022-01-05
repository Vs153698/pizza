import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard';
const PizzaList = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
           <p className={styles.desc}>
           “Anyone who says that money cannot buy happiness has clearly never spent their money on pizza.”
           </p>
           <div className={styles.wrapper}>
               <PizzaCard img='/img/pizza.png'/>
               <PizzaCard img='/img/p1.png'/>
               <PizzaCard img='/img/p3.png'/>
               <PizzaCard img='/img/p4.png'/>
               <PizzaCard img='/img/p22.png'/>
               <PizzaCard img='/img/pn.png'/>
               <PizzaCard img='/img/p3.png'/>
               <PizzaCard img='/img/p4.png'/>
               <PizzaCard img='/img/p1.png'/>
               <PizzaCard img='/img/p22.png'/>
           </div>
        </div>
    );
}

export default PizzaList;