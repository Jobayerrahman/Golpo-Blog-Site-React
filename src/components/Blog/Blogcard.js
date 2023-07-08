import withHover from "../Hoc/withHover";
import bannerimage from "../../assets/images/mocha.webp";
import Cetagory from "../Cetagory/Cetagory";

const Blogcard =({hoverEffect,onHover,onWithoutHover,isHover,cetagory}) =>{
    return(
        <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'blog-card '+hoverEffect : 'blog-card'}>
            <div className="blog-poster">
                <img
                    className="blog-image"
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className="blog-content">
                <div className="blog-heading">
                    <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                </div>
                <div className="blog-info">
                    <Cetagory cetagory={cetagory}/> <p> - 13 May 2023 12:00pm</p>
                </div>
                <p className="blog-shortline">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </div>
        </div>
    )
}

export default withHover(Blogcard);