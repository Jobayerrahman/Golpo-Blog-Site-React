import withHover from "../Hoc/withHover";
import { Link } from "react-router-dom";
const RelatedBlogComponent = ({hoverEffect,onHover,onWithoutHover,isHover,id,image,title}) =>{
    return(
        <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'relatedblog-card '+hoverEffect : 'relatedblog-card'}>
            <div className="relatedblog-poster">
                <img
                    className=""
                    src={image}
                    alt="Updating Blog" 
                />
            </div>
            <div className="relatedblog-content">
                <Link className="relatedblog-title" to={`/blog/${id}`}><h2>{title}</h2></Link>
            </div>
        </div>
    )
}

export default withHover(RelatedBlogComponent);