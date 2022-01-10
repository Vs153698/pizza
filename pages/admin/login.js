import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Login.module.css'
const login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()
    const handleClick = async()=>{
        try {
            await axios.post('http://localhost:3000/api/login',{username,password})
            setError(false)
            router.push('/admin')
        } catch (error) {
            setError(true)
        }
    }
    return (
        <>
        <Head>
                <title>Login</title>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
            </Head>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Admin Dashboard</h1>
                {error && <p className={styles.error}>Invalid Credentials</p>}
                <input type="text" placeholder='username' className={styles.input} onChange={(e)=>setUsername(e.target.value)} />
                <input type="text" placeholder='password' className={styles.input} onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={handleClick} className={styles.button}>Sign In</button>

            </div>
        </div>
        </>
    );
}

export default login;