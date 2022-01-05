import styles from '../styles/PizzaList.module.css'
const PizzaList = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
           <p className={styles.desc}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt id odio repellat itaque est ratione suscipit magnam exercitationem laboriosam facilis modi porro, ea iusto voluptatem aperiam sapiente blanditiis facere.
           </p>
           <div className={styles.wrapper}>
               
           </div>
        </div>
    );
}

export default PizzaList;