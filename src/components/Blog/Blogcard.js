import withHover from "../Hoc/withHover";
import Cetagory from "../Cetagory/Cetagory";

const Blogcard =({hoverEffect,onHover,onWithoutHover,isHover,cetagory,title,date,time,image,describe}) =>{
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
                <div className="blog-heading">
                    <h2>{title}</h2>
                </div>
                <div className="blog-info">
                    <Cetagory cetagory={cetagory}/> <p> - {date} {time}</p>
                </div>
                <p className="blog-shortline">{describe}</p>
            </div>
        </div>
    )
}

export default withHover(Blogcard);