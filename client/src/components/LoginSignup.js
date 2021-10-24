import { useState, useEffect } from "react"
import  { makeStyles } from '@mui/styles'
import { Dialog, DialogActions, DialogContent } from '@mui/material'
import { DialogTitle, TextField } from '@mui/material'
import validator from 'validator'
import axios from 'axios'

import { Link, useLocation, useHistory } from 'react-router-dom'

import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

const useStyles = makeStyles({
    loginsignup: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 0,
        margin: 0,
        height: "50px",
        backgroundColor: "#0a0a0a"
    },
    linkeffects: {
        fontSize: "1em",
        marginRight: "0.8em",
        color: "white",
        textDecoration: "none",
        '&:hover': {
            color: "#ffca68",
            cursor: "pointer"
        }
    },
    logineffects: {
        fontSize: "0.85em",
        marginRight: "0.8em",
        color: "white",
        textDecoration: "none",
        '&:hover': {
            color: "#ffca68",
            cursor: "pointer"
        }
    },
    divider: {
        marginRight: "0.8em"
    },
    button: {
        backgroundColor: "black",
        color: "white",
        height: "2.8em",
        padding: "8px",
        borderRadius: "4px",
        cursor: "pointer",
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    h4: {
        padding: 0,
        margin: 0,
    },
    dialogColor: {
        backgroundColor: "#ffca68"
    },
    p: {
        fontSize: "1em",
        color: "black"
    }
})

export default function LoginSignup(props){
    const classes = useStyles()

    //Dialog Login config
    const [openLogin, setOpenLogin] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginEmailHelperText, setLoginEmailHelperText] = useState('')
    const [loginPasswordHelperText, setLoginPasswordHelperText] = useState('')

    const validateLoginInput = () => {
        //email text field
        if(validator.isEmpty(loginEmail)){
            setLoginEmailHelperText('Email field is required')
            return false
        }else if(!validator.isEmail(loginEmail)){
            setLoginEmailHelperText('Email is invalid')
            return false
        //password field
        }else if(validator.isEmpty(loginPassword)){
            setLoginPasswordHelperText('Password field is required')
            return false
        }
        return true
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const validate = validateLoginInput()
        //console.log(validate + " :is validate value")
        //console.log("Email value", loginEmail.toString())
        if(validate){
            const newUser = {loginEmail, loginPassword}
            axios.post('/', {loginEmail, loginPassword})
                .then(res => {
                    console.log(res)
                }).catch(err => {
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

    const handleLoginOpen = () => {
        setOpenLogin(true)
    }

    const handleLoginClose = () => {
        setOpenLogin(false)
    }


    return(
        <>
            <nav className={classes.loginsignup}>
                {/* ----- original dialog login--------
                <h5 className={classes.linkeffects} onClick={handleLoginOpen}>Login</h5>
                <h5 className={classes.divider}>|</h5>
                <h5 className={classes.linkeffects} onClick={handleSignupOpen}>Sign Up</h5>*/}

                <h5 className={classes.logineffects} onClick={handleLoginOpen}>Login</h5>
                <h5 className={classes.divider}>|</h5>
                <Link to="/signup" className={classes.linkeffects}><h5>Sign Up</h5></Link>
            </nav>

            {/* Login Dialog */}    
            <Dialog open={openLogin} onClose={handleLoginClose}>
                <div className={classes.dialogColor}>
                    <DialogTitle>
                        <h3>Login</h3>
                    </DialogTitle>
                    <form onSubmit={handleLoginSubmit}>
                        <DialogContent>
                            <TextField
                                id="loginEmail"
                                label="email"
                                type="email"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={loginEmail}
                                helperText={loginEmailHelperText}
                                onInput={(e) => setLoginEmail(e.target.value)}
                                fullWidth
                            />
                            <TextField 
                                id="loginPassword"
                                label="password"
                                type="password"
                                margin="dense"
                                variant="outlined"
                                size="small"
                                value={loginPassword}
                                helperText={loginPasswordHelperText}
                                onInput={(e) => setLoginPassword(e.target.value)}
                                fullWidth
                            />                   
                        </DialogContent>
                        <DialogActions>
                            <button onClick={handleLoginClose} className={classes.button}>
                                <h4 className={classes.h4}>Cancel</h4>
                            </button>
                            <input className={classes.button} type="submit" value="Log In"/>
                        </DialogActions>
                    </form>
                </div>
            </Dialog>
        </>
    )
}