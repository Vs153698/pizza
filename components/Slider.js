import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Slider.module.css'
const Slider = () => {
    const [slideindex, setSlideindex] = useState(0)
    const img = [
        {
            id: 1,
            img: "/img/p4.png",
            title: "Pizza",
            title2: "HOT & SPICY",
            desc: "ORDER NOW"
        },
        {
            id: 2,
            img: "/img/p22.png",
            title: "BUY 2",
            title2: "GET 1 FREE",
            desc: "ORDER NOW"
        },
        {
            id: 3,
            img: "/img/p2.png",
            title: "FRESH",
            title2: "OVEN TO YOU",
            desc: "ORDER NOW"
        },
    ]
    const handlearrow = (direction) => {
        if (direction === 'left') {
            setSlideindex(slideindex !== 0 ? slideindex - 1 : 2)
        }
        if (direction === 'right') {
            setSlideindex(slideindex !== 2 ? slideindex + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowcontainer} onClick={() => handlearrow('left')} style={{ left: 0 }}>
                <Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
            </div>

            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * slideindex}vw)` }}>
                {img.map((image) => (
                    <div key={image.id} className={styles.imgcontainer}>
                        <div className={styles.info}>
                            <h2>{image.title}</h2>
                            <h1>{image.title2}</h1>
                            <button className={styles.order}>{image.desc}</button>
                        </div>
                        <Image src={image.img} alt='' width="500px" height="400px" objectFit='contain' />
                    </div>
                ))}

            </div>
            <div className={styles.arrowcontainer} onClick={() => handlearrow('right')} style={{ right: 0 }}>
                <Image src='/img/arrowr.png' alt='' layout='fill' objectFit='contain' />
            </div>
        </div>
    );
}

export default Slider;