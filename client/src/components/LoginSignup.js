import { useState } from "react"
import  { makeStyles } from '@mui/styles'
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import { DialogTitle, TextField } from '@mui/material'

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
        fontSize: "0.85em",
        marginRight: "0.8em",
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

export default function LoginSignup(){
    const classes = useStyles()

    //Dialog Login config
    const [openLogin, setOpenLogin] = useState(false)

    const handleLoginOpen = () => {
        setOpenLogin(true)
    }

    const handleLoginClose = () => {
        setOpenLogin(false)
    }

    //Dialog Sign Up config
    const [openSignup, setOpenSignup] = useState(false)

    const handleSignupOpen = () => {
        setOpenSignup(true)
    }

    const handleSignupClose = () => {
        setOpenSignup(false)
    }

    return(
        <>
            <nav className={classes.loginsignup}>
                <h5 className={classes.linkeffects} onClick={handleLoginOpen}>Login</h5>
                <h5 className={classes.divider}>|</h5>
                <h5 className={classes.linkeffects} onClick={handleSignupOpen}>Sign Up</h5>
            </nav>

            {/* Login Dialog */}
            <Dialog open={openLogin} onClose={handleLoginClose}>
                <div className={classes.dialogColor}>
                <DialogTitle>
                    <h3>Login</h3>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="email"
                        label="email"
                        type="email"
                        margin="dense"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <TextField 
                        id="password"
                        label="password"
                        type="password"
                        margin="dense"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />                   
                </DialogContent>
                <DialogActions>
                    <button onClick={handleLoginClose} className={classes.button}>
                        <h4 className={classes.h4}>Cancel</h4>
                    </button>
                    <button className={classes.button}>
                        <h4 className={classes.h4}>Log In</h4>
                    </button>
                </DialogActions>
                </div>
            </Dialog>

            {/* Sign Up Dialog */}
            <Dialog open={openSignup} onClose={handleSignupClose}>
                <div className={classes.dialogColor}>
                    <DialogContent>
                        <DialogContentText>
                            <p className={classes.p}>Sign Up to have your delivery info safely stored with us.</p>
                        </DialogContentText>
                        <TextField 
                            id="name"
                            label="name"
                            type="text"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField 
                            id="phone"
                            label="phone number"
                            type="text"
                            margin="dense"
                            variant="outlined"
                            size="small"
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
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="email"
                            type="email"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField 
                            id="password"
                            label="password"
                            type="password"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField 
                            id="password"
                            label="confirm password"
                            type="password"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <button onClick={handleSignupClose} className={classes.button}>
                            <h4 className={classes.h4}>Cancel</h4>
                        </button>
                        <button className={classes.button}>
                            <h4 className={classes.h4}>Sign Up</h4>
                        </button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    )
}