import  { makeStyles } from '@mui/styles'
import { Container, Grid } from '@mui/material'

import { Facebook, Instagram, Twitter } from "@mui/icons-material"

const useStyles = makeStyles({
    footerColor: {
        paddingTop: "20px",
        paddingBottom: "40px",
        backgroundColor: "hsl(0, 0%, 3.5%)",
    },
    footerContainer: {
        textAlign: "center"
    },
    facebook: {
        color: "hsl(240, 100%, 58%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        //fontSize: "large",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    instagram: {
        color: "hsl(43, 100%, 56%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        //fontSize: "3.5rem",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    twitter: {
        color: "hsl(225, 73%, 56%)",
        paddingRight: "5px",
        paddingLeft: "5px",
        //fontSize: "3.5rem",
        '&:hover': {
            transform: "scale(1.2)",
        }
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }
})

export default function Footer(){
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl" className={classes.footerColor}>
                <Grid container className={classes.footerContainer}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <h3>Nifty Wears &copy; 2021</h3>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} className={classes.iconContainer}>
                        <Facebook className={classes.facebook} sx={{ fontSize: 45 }}  />
                        <Instagram className={classes.instagram} sx={{ fontSize: 45 }}  />
                        <Twitter className={classes.twitter} sx={{ fontSize: 45 }} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}