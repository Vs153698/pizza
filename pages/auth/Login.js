import { Button, Card, CardActions, CardContent, Snackbar, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Head from 'next/head';
import styles from '../../styles/SignUp.module.css'
import Twitter from '@mui/icons-material/Twitter';
import { useAuth } from '../../Context/AuthContext';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MuiAlert from '@mui/material/Alert';
import Link from 'next/link';

const Login = () => {
    const Router = useRouter()
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [value, setValue] = useState({ email: '', password: '' })
    const { login, googlelogin, twitterlogin, gitlogin, resetpassword } = useAuth()
    const [open, setOpen] = useState(false)
    const [variant, setVariant] = useState('')
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        console.log(value)
    }
    const handleClose=()=>{
        setOpen(false);
  }
    const handlegoogle = async () => {
        setError('')
        try {
            setVariant('success')
            setError('Success: Redirecting To Homepage !')
            await googlelogin()
            setOpen(true)
            Router.push('/')
        } catch {
            setVariant('error')
            setError('Error in Login !')
            setOpen(true)
        }
    }
    const handlegit = async () => {
        setError('')
        try {
            setVariant('success')
            setError('Success: Redirecting To Homepage !')
            await gitlogin()
            setOpen(true)
            Router.push('/')
        } catch {
            setVariant('error')
            setError('Error in Login !')
            setOpen(true)
        }
    }
    const handletwitter = async () => {
        setError('')
        try {
            setVariant('success')
            setError('Success: Redirecting To Homepage !')
            await twitterlogin()
            setOpen(true)
            Router.push('/')
        } catch {
            setVariant('error')
            setError('Error in Login !')
            setOpen(true)
        }
    }
    const handlelogin = async () => {
        setError('')
        try {
            setLoading(true)
            setVariant('success')
            setError('Success: Redirecting To Homepage !')
            await login(value.email, value.password)
            setOpen(true)
            Router.push('/')
            setLoading(false)

        } catch {
            setVariant('error')
            setError('Invalid Credentials !')
            setOpen(true)
            setLoading(false)
        }


    }

    return (

        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Best pizza delivering services in town" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div className={styles.maincard}>
                <Card sx={{ maxWidth: 345, minWidth: 345 }} elevation={10}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" align='center'>
                            Login
                        </Typography>
                        <TextField required onChange={handleChange} name='email' value={value.email} style={{ width: '100%', marginBottom: 15 }} gutterBottom type='email' id="filled-basic" label="Email" variant="filled" />
                        <TextField required onChange={handleChange} name='password' value={value.password} style={{ width: '100%', marginBottom: 5 }} gutterBottom type='password' id="filled-basic" label="Password" variant="filled" />
                        <Link href='/auth/resetpassword' passhref ><Typography variant="body2" align='right' style={{ cursor: 'pointer' }} color="blue">forgot password?</Typography></Link>
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '-10px' }}>
                        <Button size="large" disabled={Loading} onClick={handlelogin} variant='contained'>Login</Button>
                    </CardActions>
                    <CardContent>
                        <Typography gutterBottom align='center' variant="body1" >Don't have an account? <Link href='/auth/Signup' passhref >SignUp</Link> </Typography>
                        <div className={styles.social}>
                            <GoogleIcon onClick={handlegoogle} style={{ fontSize: 40, color: '#fcbd00', marginTop: 10, cursor: 'pointer' }} />
                            <GitHubIcon onClick={handlegit} style={{ fontSize: 40, color: 'black', marginTop: 10, cursor: 'pointer' }} />
                            <Twitter onClick={handletwitter} style={{ fontSize: 40, color: '#00acee', marginTop: 10, cursor: 'pointer' }} />
                        </div>
                    </CardContent>
                </Card>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            </div>
        </>
    );
}

export default Login;