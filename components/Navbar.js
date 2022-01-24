import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { useAuth } from '../Context/AuthContext';
import { Menu, MenuItem, Avatar, Divider, Snackbar } from '@mui/material';
import Fade from '@mui/material/Fade';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MuiAlert from '@mui/material/Alert';

const Navbar = () => {
    const Router = useRouter()
    const { currentuser,quantity,logout } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const [open1, setOpen1] = useState(false)
    const [error, setError] = useState()
    const [variant, setVariant] = useState('')
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const handleClose=()=>{
          setOpen1(false);
    }
    const handleClose1 = () => {
        setAnchorEl(null);
    };
    const handlelogout = () => {
        handleClose1()
        setVariant('success')
        setError('Logged out sucessfully')
        logout()
        setOpen1(true)
    };
    const handlelogin = () => {
        handleClose1()
        Router.push('/auth/Login')
    };
    const handlesignup = () => {
        handleClose1()
        Router.push('/auth/Signup')
    };
    // const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callbutton}>
                    {/* if we are using Image container width and height are necessary  */}
                    <Image src='/img/telephone.png' alt='' width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW !</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href='/' passHref><li className={styles.listitem}>Homepage</li></Link>
                    <li className={styles.listitem}>Products</li>
                    <li className={styles.listitem}>Menu</li>
                    <Link href='/' passHref><h1 className={styles.mainlogo}>PizzaBar</h1></Link>
                    <li className={styles.listitem}>Events</li>
                    <li className={styles.listitem}>Blog</li>
                    <li className={styles.listitem}>Contacts</li>
                </ul>
            </div>
            {currentuser && <Link href='/cart' passHref>
                <div className={styles.cart}>
                    <div>
                        <Image src='/img/cart.png' alt="" width="30px" height='30px' />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>}
            <div>
                <Avatar alt="Remy Sharp" src={currentuser && currentuser.photoURL !== null?currentuser.photoURL : "/img/p5.png" }onClick={handleClick} />
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    style={{marginTop:5}}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose1}
                    TransitionComponent={Fade}
                >
                   {currentuser ? <><MenuItem onClick={handleClose1}>Profile</MenuItem>
                    <MenuItem onClick={handleClose1}>My account</MenuItem>
                    <MenuItem onClick={handlelogout}>Logout</MenuItem></>:
                    <><MenuItem onClick={handlelogin}>Login</MenuItem>
                    <MenuItem onClick={handlesignup}>SignUp</MenuItem>
                    <Divider/>
                    <MenuItem disabled onClick={handlesignup}>More coming soon !</MenuItem></>}
                </Menu>
            </div>
            <Snackbar open={open1} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
        </div>
    );
}

export default Navbar;