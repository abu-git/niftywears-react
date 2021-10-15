import HomePage from "./components/HomePage"
import  { makeStyles } from '@mui/styles'
import { BrowserRouter as Router } from "react-router-dom"
import CartContextProvider from "./context/CartContext"

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
        //marginTop: "0",
        //border: "1px solid white"
    }
})

function App() {
  const classes = useStyles()

  return (
    <Router>
      <CartContextProvider>
        <div className={classes.root}>
          <HomePage />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
