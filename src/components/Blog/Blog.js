import Catagorymenu from "../Cetagory/Catagorymenu";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
export default function Blog({blog}){
    return(
        <div>
            <div className="blog-details">
                <p>{blog.detail} </p>
            </div>
            <div className="blog-details-footer">
                <Catagorymenu/>
                <Socialmediaicon/>
            </div>
        </div>
    )
}