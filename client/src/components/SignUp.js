import * as React from 'react'
import { useState } from "react"
import  { makeStyles } from '@mui/styles'
import { Container, IconButton, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import validator from 'validator'
import axios from 'axios'

import { Link } from 'react-router-dom'

import { ReactTitle } from 'react-meta-tags'

import { ArrowBack } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import Footer from './Footer'

const StyledContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        marginTop: "2rem",
        display: "flex",
        height: "80vh",
        marginBottom: "2rem"
    },
    [theme.breakpoints.down('md')]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",   
    },
    [theme.breakpoints.down('sm')]: {
        height: "90vh"
    }
}))

const Left = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        //border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    [theme.breakpoints.down('md')]: {
        width: "80%",
        marginBottom: "1.2rem"
    }
}))

const Right = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        border: "1px solid white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffca68",
        borderRadius: "5px",
        padding: "1rem",
    },
    [theme.breakpoints.down('md')]: {
        width: "90%",
    },
}))

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })


const useStyles = makeStyles({
    containerHeight: {
        //minHeight: "75vh"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        //border: "1px solid red",
        padding: 0,
        margin: 0,
        height: "4.2em"
    },
    header: {
        margin: 0,
        padding: 0,
        //border: "1px solid yellow"
    },
    h3effects: {
        color: "white"
    },
    link: {
        textDecoration: "none"
    },
    goback: {
        display: "flex"
    },
    arrowback: {
        color: "white"
    },
    backtext: {
        color: "white",
        paddingLeft: "1em"
    },
    button: {
        padding: "1rem",
        marginTop: "1rem",
        backgroundColor: "black",
        color: "white",
        borderColor: "white",
        borderRadius: "5px",
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)",
            color: "#ffca68" 
        }
    },
    buttonDiv: {
        textAlign: "center"
    },
    alertH6: {
        padding: 0,
        margin: 0
    }
})

export default function SignUp(){
    const classes = useStyles()

    //SignUp data
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //Helper Text
    const [nameHelper, setNameHelper] = useState('')
    const [phoneHelper, setPhoneHelper] = useState('')
    const [addressHelper, setAddressHelper] = useState('')
    const [emailHelper, setEmailHelper] = useState('')
    const [passwordHelper, setPasswordHelper] = useState('')
    const [confirmPasswordHelper, setConfirmPasswordHelper] = useState('')

    //Sign Response data
    const [dataName, setDataName] = useState('')
    const [open, setOpen] = useState(false)

    const validateSignUpInput = () => {
        if(validator.isEmpty(name)){
            setNameHelper('Name is required')
            return false
        }else if(validator.isEmpty(phone)){
            setPhoneHelper('Phone number is required')
            return false
        }else if(!validator.isMobilePhone(phone)){
            setPhoneHelper('Please enter valid phone number')
            return false
        }else if(validator.isEmpty(address)){
            setAddressHelper('Delivery address is required')
            return false
        }else if(validator.isEmpty(email)){
            setEmailHelper('Email is required')
            return false
        }else if(!validator.isEmail(email)){
            setEmailHelper('Please enter valid email address')
            return false
        }else if(validator.isEmpty(password)){
            setPasswordHelper('Password is required')
            return false
        }else if(validator.isEmpty(confirmPassword)){
            setConfirmPasswordHelper("Confirm Password is required")
            return false
        }else if(!validator.equals(password, confirmPassword)){
            setPasswordHelper('Passwords do not match')
            setConfirmPasswordHelper('Passwords do not match')
            return false
        }else if(!validator.isLength(password, {min: 6, max: 30})){
            setPasswordHelper('Password must be at least 6 characters')
            return false
        }
        return true
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        const validate = validateSignUpInput()

        if(validate){
            axios.post('/signup', {name,phone,email,address,password,confirmPassword})
            .then(res => {
                console.log(res.data.name)
                setDataName(res.data.name)
                const dataResponse = res.data.name
                if(dataResponse){
                    setOpen(true)
                }
            })
            .catch(err => {
                if(err.response){
                    console.log(err.response.data)
                    console.log("Error status: ", err.response.status)
                }else if(err.request){
                    console.log(err.request)
                }else{
                    console.log(err.message)
                }
                console.log(err.config)
            })
        }
    }

    const handleClose = (e, reason) => {
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
    }

    return(
        <>
            <ReactTitle title="Nifty Wears | Sign Up" />
            <Container maxWidth="xl" className={classes.containerHeight}>
                <div className={classes.headerContainer}>
                    <Link to="/" className={classes.link}>
                        <IconButton className={classes.header}>
                            <img src={Logo} width="30px" height="30px" alt="Nifty Wears Logo" />
                            <h3 className={classes.h3effects}>Nifty Wears</h3>
                        </IconButton>
                    </Link>
                </div>
                <hr />
                {/* ---------------Go Back JSX----------- */}
                <Link to="/" className={classes.link}>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}>Back to home</span>
                    </div>
                </Link>
                {/*-----------------------------------------*/}

                <StyledContainer>
                    <Left>
                        <h1>Sign Up</h1>
                        <h5>Have your delivery info safely stored with us.</h5>
                    </Left>
                    <Right>
                        <form onSubmit={handleSignUpSubmit}>
                            <TextField 
                                id="name"
                                label="full name"
                                type="text"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={name}
                                helperText={nameHelper}
                                onInput={(e) => {setName(e.target.value); setNameHelper('')}}
                                fullWidth
                            />
                            <TextField 
                                id="phone"
                                label="phone number"
                                type="text"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={phone}
                                helperText={phoneHelper}
                                onInput={(e) => {setPhone(e.target.value); setPhoneHelper('')}}
                                fullWidth
                            />
                            <TextField 
                                id="address"
                                label="delivery address"
                                type="text"
                                margin="dense"
                                multiline
                                rows={3}
                                variant="outlined"
                                size="small"
                                value={address}
                                helperText={addressHelper}
                                onInput={(e) => {setAddress(e.target.value); setAddressHelper('')}}
                                fullWidth
                            />
                            <TextField
                                id="email"
                                label="email"
                                type="email"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={email}
                                helperText={emailHelper}
                                onInput={(e) => {setEmail(e.target.value); setEmailHelper('')}}
                                fullWidth
                            />
                            <TextField 
                                id="password"
                                label="password"
                                type="password"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={password}
                                helperText={passwordHelper}
                                onInput={(e) => {setPassword(e.target.value); setPasswordHelper('')}}
                                fullWidth
                            />
                            <TextField 
                                id="confirmpassword"
                                label="confirm password"
                                type="password"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={confirmPassword}
                                helperText={confirmPasswordHelper}
                                onInput={(e) => {setConfirmPassword(e.target.value); setConfirmPasswordHelper('')}}
                                fullWidth
                            />
                            <div className={classes.buttonDiv}>
                                <button type="submit" className={classes.button}>Sign Up!</button>
                            </div>
                        </form>
                    </Right>
                </StyledContainer>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Sign Up Successful!
                    </Alert>
                </Snackbar>
            </Container>
            <Footer />
        </>
    )
}