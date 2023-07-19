import { Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Cetagorypage from "./pages/Cetagorypage";
import Blogpage from "../src/pages/Blogpage";
export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route exact path="/" Component={Homepage}></Route>
                <Route exact path="/:cetagory" Component={Cetagorypage} cetagory={':cetagory'}></Route>
                <Route exact path="/blog/:id" Component={Blogpage}></Route>
                {/* <Route path="/:slug" component={Blogpage} /> */}
            </Routes>
        </>
    );
}
  
