import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import  { makeStyles } from '@mui/styles'
import { BrowserRouter as Router, Route } from "react-router-dom"
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
