import withHover from "../Hoc/withHover";
import Cetagory from "../Cetagory/Cetagory";
import { Link } from "react-router-dom";

const Blogcard =({hoverEffect,onHover,onWithoutHover,isHover,cetagory,id,title,date,time,image,describe}) =>{

    const blogDate = date;
    var parsedDate = new Date(blogDate);
    const options = {  day: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var finalDate = parsedDate.toLocaleDateString("en-GB", options);
    
    return(
        <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'blog-card '+hoverEffect : 'blog-card'}>
            <div className="blog-poster">
                <img
                    className="blog-image"
                    src={image}
                    alt="Updating Blog" 
                />
            </div>
            <div className="blog-content">
                <Link className="blog-heading" to={`/blog/${id}`}><h2>{title}</h2></Link>
                <div className="blog-info">
                    <Cetagory cetagory={cetagory}/> <p> - {finalDate} {time}</p>
                </div>
                <p className="blog-shortline">{describe}</p>
            </div>
        </div>
    )
}

export default withHover(Blogcard);