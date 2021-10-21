import { ReactTitle } from 'react-meta-tags'
import { Container, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import  { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import { ArrowBack, DeleteOutline } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import { CartContext } from "../context/CartContext"
import { useContext } from "react"

import Footer from './Footer'


const StyledImg = styled('img')(({theme}) => ({
    padding: "1em",
    width: "150px",
    height: "100%",
    [theme.breakpoints.down('md')]: {
        width: "130px"
    },
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
}))

const StyledLeft = styled('div')(({theme}) => ({
    width: "50%",
    //border: "1px solid yellow",
    [theme.breakpoints.down('sm')]: {
        width: "35%"
    }
}))

const StyledH4 = styled('h4')(({theme}) => ({
    fontSize: "25px",
    padding: "0",
    margin: "0",
    [theme.breakpoints.down('sm')]: {
        fontSize: "20px"
    }
}))

const StyledButton = styled('button')(({theme}) => ({
    padding: "15px 20px 15px 20px",
    backgroundColor: "black",
    borderColor: "white",
    color: "white",
    borderRadius: "5px",
    margin: "0 9px 0 9px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "transform 0.15s ease-in-out",
    '&:hover': {
        transform: "scale(1.2)",
    },
    [theme.breakpoints.down('sm')]: {
        padding: "12px 17px 12px 17px",
        margin: "0 7px 0 7px",
    }

}))

const StyledRight = styled('div')(({theme}) => ({
    width: "50%",
    //border: "1px solid blue",
    margin: "auto",
    [theme.breakpoints.down('sm')]: {
        width: "65%"
    }
}))

const StyledCardContainer = styled('div')(({theme}) => ({
    display: "flex",
    border: "1px solid grey",
    borderRadius: "5px",
    /*[theme.breakpoints.down('sm')]: {
        border: "none"
    }*/
}))

const StyledCartTotalPromoContainer = styled('div')(({theme}) => ({
    marginTop: "2em",
    display: "flex",
}))

const StyledPromoContainer = styled('div')(({theme}) => ({
    border: "1px solid red",
    width: "50%"
}))

const StyledTotalContainer = styled('div')(({theme}) => ({
    border: "1px solid blue",
    width: "50%"
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
        //border: "1px solid red",
        display: "flex",
        border: "1px solid grey",
        borderRadius: "5px"
    },
    thumbnail: {
        display: "flex",
        justifyContent: "center"
    },
    thumbnailDetail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    rightDetail: {
        display: "flex",
        //border: "1px solid red",
        justifyContent: "center",
    },
    button: {
        padding: "15px 20px 15px 20px",
        backgroundColor: "black",
        borderColor: "white",
        color: "white",
        borderRadius: "5px",
        margin: "0 9px 0 9px",
        fontSize: "18px",
        cursor: "pointer",
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    h4: {
        fontSize: "25px",
        padding: "0",
        margin: "0"
    },
    deleteIcon: {
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    promotext: {
        fontSize: "1em"
    }
})


export default function CartPage(){
    const classes = useStyles()
    const { cart, addCart, removeCart, total } = useContext(CartContext)

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
                                <StyledCardContainer>
                                    <StyledLeft>
                                        <div className={classes.thumbnail}>
                                            <StyledImg src={item.photo} alt={item.title} />
                                            <div className={classes.thumbnailDetail}>
                                                <h4>{item.title}</h4>
                                                <h5>{item.price}</h5>
                                            </div>
                                        </div>
                                    </StyledLeft>
                                    <StyledRight>
                                        <div className={classes.rightDetail}>
                                            <StyledButton onClick={() => removeCart(item.id)}>-</StyledButton>
                                            <StyledH4>{item.quantity}</StyledH4>
                                            <StyledButton onClick={() => addCart(item.id)}>+</StyledButton>
                                            <DeleteOutline className={classes.deleteIcon} onClick={() => removeCart(item.id)} sx={{ fontSize: 42 }} />
                                        </div>
                                    </StyledRight>
                                </StyledCardContainer>
                            </>
                        )
                    })}
                </section>

                {/*----Promo Code and Total Info----*/}
                <StyledCartTotalPromoContainer>
                    <StyledPromoContainer>
                        <p className={classes.promotext}>Have a Promo Code?</p>
                    </StyledPromoContainer>
                    <StyledTotalContainer>
                        <h5>Subtotal: {" "}&#163;{total}</h5>
                        <h5>Promo Code Discount: &#163;0</h5>
                        <h5>Tax: &#163;0</h5>
                        <h4>Total: &#163;{total}</h4>
                    </StyledTotalContainer>
                </StyledCartTotalPromoContainer>
            </Container>
            <Footer />
        </>
    )
}