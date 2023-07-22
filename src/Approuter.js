import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Cetagorypage from "./pages/Cetagorypage";
import Blogpage from "../src/pages/Blogpage";
import Aboutpage from "../src/pages/Aboutpage";
import Contactpage from "../src/pages/Contactpage";
import Quotespage from "../src/pages/Quotespage";
export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route exact path="/:cetagory" Component={Cetagorypage} cetagory={':cetagory'}></Route>
                <Route exact path="/blog/:id" Component={Blogpage}></Route>
                <Route exact path="/About" Component={Aboutpage}></Route>
                <Route exact path="/Contact" Component={Contactpage}></Route>
                <Route exact path="/Quotes" Component={Quotespage}></Route>
            </Routes>
        </>
    );
}
  
