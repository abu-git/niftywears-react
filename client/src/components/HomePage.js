import Navbar from "./Navbar"
import AfterNav from "./AfterNav"
import Footer from "./Footer"
import { ReactTitle } from 'react-meta-tags'


export default function HomePage(){

    return(
        <div>
            <ReactTitle title="Nifty Wears | Home" />
            <Navbar />
            <AfterNav />
            <Footer />
        </div>
    )
}