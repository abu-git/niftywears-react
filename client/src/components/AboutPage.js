import { Container, Grid, IconButton } from '@mui/material'
import  { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import { ArrowBack } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import Footer from './Footer'

const StyledContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh"
    },
    [theme.breakpoints.down('lg')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    [theme.breakpoints.down('md')]: {
        display: "flex",
        flexDirection: "column"
    }
}))

const Left = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        //border: "1px solid red",
    },
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
    },
    [theme.breakpoints.down('md')]: {
        width: "80%"
    }
}))

const Right = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        //border: "1px solid blue"
    },
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    },
    [theme.breakpoints.down('md')]: {
        width: "80%",
        fontSize: "1em"
    },
    [theme.breakpoints.down('sm')]: {
        width: "80%",
        fontSize: "0.7em"
    }
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
    }
})







export default function AboutPage(){
    const classes = useStyles()

    return(
        <>
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
                        <Left><h1>About Us</h1></Left>
                        <Right>
                            <p>We are a start up attire company with a simple business idea.
                            Our aim is to procure and produce suitable clothing for anyone 
                            willing to see value in our branded products.</p>
                        </Right>
                </StyledContainer>
            </Container>
            <Footer />
        </>
    )
}