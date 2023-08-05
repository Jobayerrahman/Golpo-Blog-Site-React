import AppRouter from '../Approuter';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from "react-router-dom";
import StartFromTop from './ScrollToPlaces/StartFromTop';
import ScrollToTop from './ScrollToPlaces/ScrollToTop';


export default function Golpo(){
    return(
        <div className="body">
            <BrowserRouter>
                <StartFromTop/>
                <Navigation/>
                <AppRouter/>
                <Footer/>
                <ScrollToTop/>
            </BrowserRouter>
        </div>
    ); 
}