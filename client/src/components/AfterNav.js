import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Container, Grid } from '@mui/material'

import { styled } from '@mui/material/styles'
import  { makeStyles } from '@mui/styles'

import MenuItem from './MenuItem'

const StyledContainer = styled('div')(({theme}) => ({
    marginTop: "10px",
    [theme.breakpoints.down('sm')]: {
        marginTop: "2px"
    },
    [theme.breakpoints.down('md')]: {
        marginTop: "10px"
    }
}))

const StyledGridContainer = styled('div')(({theme}) => ({
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
}))

const StyledGridItem = styled('div')(({theme}) => ({
    textAlign: "center",
    margin: "10px 0",
    [theme.breakpoints.down('xs')]: {
        margin: "10px 0"
    }
}))

const Showcase = styled('div')(({theme}) => ({
    minHeight: "40vh",
    backgroundImage: `url("/nifty-backdrop.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    isolation: "isolate",
    border: "1px solid white",
    [theme.breakpoints.down('sm')]: {
        minheight: "30vh"
    }
}))

const StyledH2 = styled('h2')(({theme}) => ({
    display: "block",
    width: "max-content",
    background: "white",
    fontSize: "2em",
    color: "black",
    padding: "0.25em 0.5em",
    borderRadius: "0.125em",
    marginTop: "0",
    marginBottom: "0.5em",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.3em"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "1.3em"
    }
}))

const StyledP = styled('p')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.5em"
    }
}))

const ShowcaseIntro = styled('div')(({theme}) => ({
    width: "50%",
    padding: "2em",
    paddingTop: "min(15vh, 10rem)",
    position: "relative",
    /*textAlign: "center",
    fontSize: "1.8rem",
    fontStyle: "italic"*/
    //border: "1px solid red",
    '&::after' : {
        content: `''`,
        position: "absolute",
        inset: "0",
        zIndex: -1,
        //background: "#355f08",
        /*opacity: 1,*/
        //mixBlendMode: "multiply"
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: "min(10vh, 5rem)",
        width: "100%"
    },
    [theme.breakpoints.down('md')]: {
        paddingTop: "min(10vh, 5rem)",
        width: "90%"
    }
}))

const useStyles = makeStyles({
    gridcontainer: {
        display: "flex",
        //flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //border: "1px solid red"
    }
})

export default function AfterNav(){
    const { products } = useContext(CartContext)
    const classes = useStyles()
    return(
        <>
            {/* Showcase Area */}
            <StyledContainer>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Showcase>
                                <ShowcaseIntro>
                                    <StyledH2>20% off first buy</StyledH2>
                                    <h1>Nifty Wears</h1>
                                    <StyledP>Your one stop shop for specially crafted clothing</StyledP>
                                </ShowcaseIntro>
                            </Showcase>
                        </Grid>
                    </Grid>
                </Container>
                <div id="shop"></div>
            </StyledContainer>
            
            {/* Grid for Menu Item */}
            <Container maxWidth="xl">
                <StyledGridContainer container>
                    <StyledGridItem item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h2>Check our stock!</h2>
                    </StyledGridItem>
                </StyledGridContainer>
                <Grid container className={classes.gridcontainer}>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <MenuItem product={products[0]} key={products[0].id} />   
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <MenuItem product={products[1]} key={products[1].id} />   
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <MenuItem product={products[2]} key={products[2].id} />   
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}