import { Container, Grid } from '@mui/material'
import  { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

const StyledContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
        border: "1px solid red",
    },
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
    }
}))

const Right = styled('div')(({theme}) => ({
    [theme.breakpoints.down('xl')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        border: "1px solid blue"
    },
    [theme.breakpoints.down('lg')]: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
    }
}))

const useStyles = makeStyles({
    header: {
        width: "50%",
        textAlign: "center",
        alignContent: "center"
    },
    article: {
        width: "50%",
        textAlign: "center"
    }
})







export default function AboutPage(){
    const classes = useStyles()

    return(
        <>
            <Container maxWidth="xl">
                    <StyledContainer>
                            <Left><h1>About Us</h1></Left>
                            <Right>
                                <p>We are a start up attire company with a simple business idea.
                                Our aim is to procure and produce suitable clothing for anyone 
                                willing to see value in our branded products.</p>
                            </Right>
                    </StyledContainer>
            </Container>
        </>
    )
}