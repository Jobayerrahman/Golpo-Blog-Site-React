import Categorymenu from "../Category/Categorymenu";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
export default function Blog({blog}){
    return(
        <div>
            <div className="blog-details">
                <p>{blog.detail} </p>
            </div>
            <div className="blog-details-footer">
                <Categorymenu/>
                <Socialmediaicon/>
            </div>
        </div>
    )
}