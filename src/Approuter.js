import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Categorypage from "./pages/Categorypage";
import Blogpage from "../src/pages/Blogpage";
import Aboutpage from "../src/pages/Aboutpage";
import Contactpage from "../src/pages/Contactpage";
import Quotespage from "../src/pages/Quotespage";
import Postpage from "./pages/Postpage";
export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route exact path="/:category" Component={Categorypage} category={':category'}></Route>
                <Route exact path="/blog/:id" Component={Blogpage}></Route>
                <Route exact path="/About" Component={Aboutpage}></Route>
                <Route exact path="/Contact" Component={Contactpage}></Route>
                <Route exact path="/Posts" Component={Postpage}></Route>
            </Routes>
        </>
    );
}
  
