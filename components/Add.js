import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Add.module.css'

const Add = ({setOpen}) => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [extra, setExtra] = useState(null)
    const [extraOptions, setExtraOptions] = useState([])
    const handleExtrainput = (e)=>{
        setExtra({...extra,[e.target.name]:e.target.value})
    }
    const handleextra = ()=>{
        setExtraOptions((prev)=>[...prev,extra])
    }
    const changePrice = (e)=>{
        setExtraOptions((prev)=>[...prev,extra])
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={()=>setOpen(false)}>X</span>
                <h1>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label htmlFor="image" className={styles.label}>Choose a image</label>
                    <input type="file" id='image' className={styles.input}/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="title" className={styles.label}>Title</label>
                    <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} className={styles.input}/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="desc" className={styles.label}>Description</label>
                    <input type="text" id='desc' className={styles.input} onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="prices" className={styles.label}>Prices</label>
                    <input type="number" id='prices' placeholder='Small' className={`${styles.input} ${styles.inputsm}`} onChange={(e)=>changePrice(e,0)}/>
                    <input type="number" id='prices' placeholder='Medium' className={`${styles.input} ${styles.inputsm}`} onChange={(e)=>changePrice(e,1)}/>
                    <input type="number" id='prices' placeholder='Large' className={`${styles.input} ${styles.inputsm}`} onChange={(e)=>changePrice(e,2)}/>
                </div>
                <div className={styles.item}>
                    <label htmlFor="extra" className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                    <input type="text" name='text' id='extra' placeholder='Item' className={`${styles.input} ${styles.inputsm}`} onChange={handleExtrainput}/>
                    <input type="number" name='price' id='extra' placeholder='Price' className={`${styles.input} ${styles.inputsm}`} onChange={(e)=>changePrice(e,1)}/>
                    <button className={styles.extrabutton} onClick={handleextra}>Add</button>
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
}

export default Add;