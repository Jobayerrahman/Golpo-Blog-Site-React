import AppRouter from '../Approuter';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from "react-router-dom";


export default function Golpo(){
    return(
        <div className="body">
            <BrowserRouter>
                <Navigation/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    ); 
}