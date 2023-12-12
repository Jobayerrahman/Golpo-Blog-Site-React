import withHover from "../Hoc/withHover";
import BlogContext from "../Library/BlogContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
const RelatedBlogComponent = ({hoverEffect,onHover,onWithoutHover,isHover,id,image,title}) =>{

    const context = useContext(BlogContext);
    const {blogs} = context
    return(
        <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'relatedblog-card '+hoverEffect : 'relatedblog-card'}>
            <div className="relatedblog-poster">
                <img
                    className=""
                    src={blogs.image}
                    alt="Updating Blog" 
                />
            </div>
            <div className="relatedblog-content">
                <Link className="relatedblog-title" to={`/blog/${blogs.slug}`}><h2>{blogs.title}</h2></Link>
            </div>
        </div>
    )
}

export default withHover(RelatedBlogComponent);