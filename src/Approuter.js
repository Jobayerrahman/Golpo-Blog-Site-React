import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
// import Aboutpage from "../Pages/Aboutpage";
// import Contactpage from "../Pages/Contactpage";
import Catagorypage from "./pages/Catagorypage";
import Blogpage from "../src/pages/Blogpage";
export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                {/* <Route exact path="/About" Component={Aboutpage}></Route> */}
                {/* <Route exact path="/Contact" Component={Contactpage}></Route> */}
                <Route exact path="/:id" Component={Catagorypage} catagory={':id'}></Route>
                <Route exact path="/Blog" Component={Blogpage}></Route>
            </Routes>
        </>
    );
}
  
