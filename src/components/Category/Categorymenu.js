import { Link } from "react-router-dom";

export default function Catagorymenu(){
    return(
        <div className="catagory-menu-wrapper">
            <h2>Catagories: </h2>
            <div className="catagories">
                <Link className="catagory catagory-Nature mx-2" to="/Nature">Nature</Link>
                <Link to="/Technology" className="catagory catagory-Technology mx-2">Technology</Link>
                <Link to="/Entertainment" className="catagory catagory-Entertainment mx-2">Entertainment</Link>
                <Link to="/History" className="catagory catagory-History mx-2">History</Link>
                <Link to="/Health" className="catagory catagory-Health mx-2">Health</Link>
            </div>
        </div>
    )
}