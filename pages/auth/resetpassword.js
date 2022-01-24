import {  Button, Card, CardActions, CardContent,  Snackbar,  TextField, Typography } from '@mui/material';
import Head from 'next/head';
import styles from '../../styles/SignUp.module.css'
import MuiAlert from '@mui/material/Alert';
import { useAuth } from '../../Context/AuthContext';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const resetpassword = () => {
    const Router = useRouter()
    const [open, setOpen] = useState(false)
    const [variant, setVariant] = useState('')
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [value, setValue] = useState({email:''})
    const {resetpassword} = useAuth()
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const handleClose=()=>{
          setOpen(false);
    }
    const handleChange = (e)=>{
        setValue({...value,[e.target.name]:e.target.value})
        console.log(value)
    }
    const handlereset=async()=>{
        setError('')
            try {
                setLoading(true)
                setVariant('success')
                setError('Password Reset Link Sent !')
                await resetpassword(value.email)
                setOpen(true)
                setLoading(false)

            } catch  {
                setVariant('error')
                setError('Invalid Credentials !')
                setLoading(false)
                setOpen(true)
            }
    }

    return (
        <>
            <Head>
                <title>Reset Password</title>
                <meta name="description" content="Best pizza delivering services in town" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&family=Lobster&family=Pacifico&family=Permanent+Marker&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
           <div className={styles.maincard}>
           <Card sx={{ maxWidth: 345, minWidth:345 }} elevation={10}>
      <CardContent>
        <Typography  gutterBottom variant="h4" component="div" align='center'>
          Reset Password
        </Typography>
        <TextField required onChange={handleChange} name='email' value={value.email} style={{width:'100%',marginBottom:15}} gutterBottom type='email' id="filled-basic" label="Email" variant="filled" />
      </CardContent>
      <CardActions style={{display:'flex', justifyContent:'center',marginTop:'-10px'}}>
        <Button size="large" disabled={Loading} onClick={handlereset} variant='contained'>Reset</Button>
      </CardActions>
      
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

export default resetpassword;