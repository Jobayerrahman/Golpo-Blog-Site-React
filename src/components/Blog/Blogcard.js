import withHover from "../Hoc/withHover";
import Category from "../Category/Category";
import BlogContext from "../Library/BlogContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Blogcard =({hoverEffect,onHover,onWithoutHover,isHover}) =>{

    const context = useContext(BlogContext);
    const {blogs} = context
    const blogDate = blogs.date;
    var parsedDate = new Date(blogDate);
    const options = {  day: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var finalDate = parsedDate.toLocaleDateString("en-GB", options);
    
    return(
        <div key={blogs.id} onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'blog-card '+hoverEffect : 'blog-card'}>
            <div className="blog-poster">
                <img
                    className="blog-image"
                    src={blogs.image}
                    alt="Updating Blog" 
                />
            </div>
            <div className="blog-content">
                <Link className="blog-heading" to={`/blog/${blogs.id}`}><h2>{blogs.title}</h2></Link>
                <div className="blog-info">
                    <Category cetagory={blogs.category}/> <p> - {finalDate} {blogs.time}</p>
                </div>
                <p className="blog-shortline">{blogs.describe}</p>
            </div>
        </div>
    )
}

export default withHover(Blogcard);