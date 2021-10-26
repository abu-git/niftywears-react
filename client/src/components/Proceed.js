import { ReactTitle } from 'react-meta-tags'
import { Container, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import  { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

import { ArrowBack, DeleteOutline } from "@mui/icons-material"
import Logo from "../assets/assets/favicon_io/favicon-32x32.png"

import { CartContext } from "../context/CartContext"
import { useContext, useEffect, useState } from "react"

import Footer from './Footer'

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
})

export default function Proceed(){
    const classes = useStyles()

    return(
        <>
            <ReactTitle title="Nifty Wears | Cart Confirm" />
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
                <Link to="/cart" className={classes.link}>
                    <div className={classes.goback}>
                        <ArrowBack className={classes.arrowback} />
                        <span className={classes.backtext}>Back to cart</span>
                    </div>
                </Link>
                {/*-----------------------------------------*/}
            </Container>
        </>
    )
}