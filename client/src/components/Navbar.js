import { IconButton, Badge, Container } from '@mui/material'
import  { makeStyles, withStyles } from '@mui/styles'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from "@mui/icons-material"
import { scroller } from 'react-scroll'

//Login Sign Up
import LoginSignup from './LoginSignup'

//Context
import { CartContext } from "../context/CartContext"

import Logo from "../assets/assets/favicon_io/favicon-32x32.png"


const styles = theme => ({
    customBadge: {
        backgroundColor: "#ffca68",
        color: "black",
        '&:hover': {
        backgroundColor: "black",
        color: "#ffca68"
        }
    }
})

const useStyles = makeStyles({
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        //border: "1px solid red",
        padding: 0,
        margin: 0,
        height: "4.5em"
    },
    header: {
        margin: 0,
        padding: 0,
        //border: "1px solid yellow"
    },
    h3effects: {
        color: "white"
    },
    container: {
        display: "flex",
        color: "white",
        backgroundColor: "black",
        height: "45px",
    },
    navbutton: {
        padding: "10px",
        textAlign: "center",
        fontSize: "1em",
        cursor: "pointer",
        textDecoration: "none",
        color: "white",
        '&:hover': {
            backgroundColor: "#ffca68",
            color: "black"
        }
    },
    cartbutton: {
        marginLeft: "auto",
        padding: "10px",
        fontSize: "1em",
        cursor: "pointer",
        textDecoration: "none",
        color: "white",
        '&:hover': {
            backgroundColor: "#ffca68",
            color: "black"
        }
    }
})

function SimpleBadge(props) {
    const { classes } = props
    const { quantity } = useContext(CartContext)
    return(
        <Badge classes={{ badge: classes.customBadge }} badgeContent={quantity} overlap="circular">
            <ShoppingCart />
        </Badge>
    )
}

const StyledBadge = withStyles(styles)(SimpleBadge)

export default function Navbar(){
    const classes = useStyles()

    const scrollFunc = () => {
        var scroll = scroller
        scroll.scrollTo("shop", {
            smooth: true
        })
    }

    return(
        <Container maxWidth="xl">
            <div className={classes.headerContainer}>
                <IconButton className={classes.header}>
                    <img src={Logo} width="30px" height="30px" alt="Nifty Wears Logo" />
                    <h3 className={classes.h3effects}>Nifty Wears</h3>
                </IconButton>
            </div>

            {/* Login and Sign Up dialog should be here */}
            <LoginSignup />

            <nav className={classes.container}>
                <Link to="/about" className={classes.navbutton}>About</Link>
                <div className={classes.navbutton} onClick={() => scrollFunc()}>Shop</div>
                <Link to="/contact" className={classes.navbutton}>Contact</Link>
                <Link to="/cart" className={classes.cartbutton}>Cart{" "}<StyledBadge /></Link>
            </nav>
        </Container>
    )
}