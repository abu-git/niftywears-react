import { Container, IconButton, TextField } from '@mui/material'
import  { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import { ReactTitle } from 'react-meta-tags'

import { ArrowBack } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import Footer from './Footer'

const StyledContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        marginTop: "2rem",
        display: "flex",
        height: "70vh",
        marginBottom: "2rem"
    },
    [theme.breakpoints.down('md')]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "60vh",   
    },
    [theme.breakpoints.down('sm')]: {
        height: "70vh"
    }
}))

const Left = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        //border: "1px solid red",
        display: "flex",
        justifyContent: "center",
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
        padding: "1rem"
    },
    [theme.breakpoints.down('md')]: {
        width: "90%",
    },
}))

const useStyles = makeStyles({
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
    }
})

export default function ContactPage(){
    const classes = useStyles()

    return(
        <>
            <ReactTitle title="Nifty Wears | Contact" />
            <Container maxWidth="xl">
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
                        <h1>Contact</h1>
                    </Left>
                    <Right>
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
                            id="email"
                            label="email"
                            type="email"
                            margin="dense"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField 
                            id="message"
                            label="leave us a message..."
                            type="text"
                            margin="dense"
                            multiline
                            rows={3}
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <button className={classes.button}>Send Message!</button>
                    </Right>
                </StyledContainer>
            </Container>
            <Footer />
        </>
    )
}