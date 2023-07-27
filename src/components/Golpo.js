import AppRouter from '../Approuter';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToPlaces/ScrollToTop';


export default function Golpo(){
    return(
        <div className="body">
            <BrowserRouter>
                <ScrollToTop/>
                <Navigation/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    ); 
}