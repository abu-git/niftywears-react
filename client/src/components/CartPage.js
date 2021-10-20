import { ReactTitle } from 'react-meta-tags'
import { Container, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import  { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import { ArrowBack } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"


const StyledImg = styled('img')(({theme}) => ({
    padding: "1em",
    width: "150px",
    height: "100%",

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
        color: "white",
    },
    titleContainer: {
        textAlign: "center"
    },
    titleFX: {
        color: "white",
        fontSize: "2em"
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
    cartContainer: {
        border: "1px solid red",
        display: "flex",
    },
    left: {
        width: "40%",
        border: "1px soild blue"
    },
    right: {
        width: "60%",
        border: "1px solid yellow"
    },
    thumbnail: {
        display: "flex",
        justifyContent: "center"
    },
    thumbnailDetail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
})


export default function CartPage(){
    const classes = useStyles()
    const { cart } = useContext(CartContext)

    return(
        <>
            <ReactTitle title="Nifty Wears | Cart" />
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

                <header className={classes.titleContainer}>
                    <h3 className={classes.titleFX}>Shopping Cart</h3>
                </header>
                <section>
                    { cart.map(item => {
                        return(
                            <>
                                <div className={classes.cartContainer}>
                                    <div className={classes.left}>
                                        <div className={classes.thumbnail}>
                                            <StyledImg src={item.photo} alt={item.title} />
                                            <div className={classes.thumbnailDetail}>
                                                <h4>{item.title}</h4>
                                                <h6>{item.price}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.right}>

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </section>
            </Container>
        </>
    )
}