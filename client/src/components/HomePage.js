import Navbar from "./Navbar"
import AfterNav from "./AfterNav"
import Footer from "./Footer"
import { ReactTitle } from 'react-meta-tags'

import { useLocation, useHistory } from 'react-router-dom'

import * as React from 'react'
import { useState, useEffect } from "react"
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})


export default function HomePage(){
    const location = useLocation()
    const history = useHistory()

    const [nowLogin, setNowLogin] = useState('')

    //SignUp Successful Snackbar config
    const [open, setOpen] = useState(false)

    const handleClose = (e, reason) => {
        if(reason === 'clickaway'){
            return
        }
        setOpen(false)
    }

    useEffect(() =>{
        if(location.state){
            setNowLogin(location.state.detail)
            setOpen(true)
        }
    },[location.state])


    return(
        <div>
            <ReactTitle title="Nifty Wears | Home" />
            <Navbar />
            <AfterNav />
            <Footer />
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} autoHideDuration={10000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {nowLogin}
                </Alert>
            </Snackbar>
        </div>
    )
}