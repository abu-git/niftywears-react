import { Box, CardActions, Alert } from '@mui/material/'
import { CardActionArea, CardMedia, Collapse, IconButton } from '@mui/material/'
import { Close } from '@mui/icons-material/'
import  { makeStyles } from '@mui/styles'
//import { styled } from '@mui/material/styles'


import { useState, useContext } from 'react'

import { CartContext } from '../context/CartContext'

/*const StyledCardRoot = styled('div')(({theme}) => ({
    //maxWidth: 300,
    //textAlign: "center",
    padding: 0,
    /*[theme.breakpoints.down('sm')]: {
        width: 400
    },
    transition: "transform 0.15s ease-in-out",
    "&:hover": { 
        transform: "scale3d(1.05, 1.05, 1)" 
    },
}))

const StyledGridItem = styled('div')(({theme}) => ({
    margin: "0 auto",
    padding: "2rem 4rem",
    [theme.breakpoints.down('sm')]: {
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center"
    },
    [theme.breakpoints.down('xs')]: {
        padding: "1rem 2rem"
    }
}))*/

const useStyles = makeStyles({
    cardmedia: {
        height: 200
    },
    cardaction: {
        backgroundColor: "hsl(0, 0%, 6%)",
        color: "white",
        '&:hover' : {
            backgroundColor: "hsl(0, 0%, 10%)",
        },
    },
    buttonmargin: {
        margin: "0 auto"
    },
    buttonhover: {
        backgroundColor: "inherit",
        borderColor: "white",
        padding: "1.2rem",
        margin: "1rem",
        borderRadius: "4px",
        color: "white",
        transition: "transform 0.15s ease-in-out",
        '&:hover':{
            backgroundColor: "#ffca68",
            borderColor: "black",
            color: "black",
            transform: "scale(1.2)",
            //color: "black"
        }
    },
    h6: {
        padding: "0",
        margin: "0"
    },
    carddiv: {
        textAlign: "center",
        //border: "1px solid red",
        borderRadius: "5px",
        //margin: "0",
        margin: "0 auto",
        //adding: "2rem 4rem",
        padding: 0,
        maxWidth: "300px",
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)"
        }
    }
})

const MenuItem = ({product}) => {
    const classes = useStyles()
    const { addCart } = useContext(CartContext)
    const [open, setOpen] = useState(false)
    //console.log(product)
    return(
        <>
            {/*<StyledGridItem>*/}
                {/*<StyledCardRoot>*/}
                <div className={classes.carddiv}>
                    <CardActionArea>
                        <CardMedia
                            component="img" 
                            className={classes.cardmedia}
                            image={product.photo}
                            title="Nifty Wears Model"
                        />
                    </CardActionArea>
                    <CardActions className={classes.cardaction}>
                        <Box className={classes.buttonmargin}>
                            <h3>{product.title}</h3>
                            <h3>${product.price}</h3>
                            <button
                                onClick={() => { addCart(product.id); setOpen(true) }}
                                variant="outlined"
                                color="inherit"
                                className={classes.buttonhover}
                            >
                                <h5 className={classes.h6}>Add to Cart</h5>
                            </button>
                            <div>
                                <Collapse in={open}>
                                    <Alert
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => {setOpen(false)}}
                                            >
                                                <Close fontSize="inherit" />
                                            </IconButton>
                                        }
                                    >
                                        {product.title}{" "}added to Cart
                                    </Alert>
                                </Collapse>
                            </div>
                        </Box>
                    </CardActions>
                </div>
                {/*</StyledCardRoot>*/}
            {/*</StyledGridItem>*/}
        </>
    )
}

export default MenuItem