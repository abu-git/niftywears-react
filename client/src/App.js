import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import CartPage from "./components/CartPage"
import SignUp from "./components/SignUp"
import Proceed from "./components/Proceed"

import  { makeStyles } from '@mui/styles'
import { BrowserRouter as Router, Route } from "react-router-dom"
import CartContextProvider from "./context/CartContext"

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        backgroundColor: "hsl(0, 100%, 0%)",
        color: "white",
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
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart-confirm" component={Proceed} />
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
