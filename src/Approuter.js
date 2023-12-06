import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Categorypage from "./pages/Categorypage";
import Blogpage from "../src/pages/Blogpage";
import Aboutpage from "../src/pages/Aboutpage";
import Contactpage from "../src/pages/Contactpage";
import Timelinepage from "./pages/Timelinepage";
import Postpage from "./pages/Postpage";
export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route exact path="/:category" Component={Categorypage} category={':category'}></Route>
                <Route exact path="/blog/:slug" Component={Blogpage}></Route>
                <Route exact path="/About" Component={Aboutpage}></Route>
                <Route exact path="/Contact" Component={Contactpage}></Route>
                <Route exact path="/Timeline" Component={Timelinepage}></Route>
                <Route exact path="/post/:slug" Component={Postpage}></Route>
            </Routes>
        </>
    );
}
  
