import withHover from "./Hoc/withHover";
import bannerimage from "../assets/images/mocha.webp";

const RelatedBlogComponent = ({hoverEffect,onHover,onWithoutHover,isHover}) =>{
    return(
        <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'relatedblog-card '+hoverEffect : 'relatedblog-card'}>
            <div className="relatedblog-poster">
                <img
                    className=""
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className="relatedblog-content">
                <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
            </div>
        </div>
    )
}

export default withHover(RelatedBlogComponent);