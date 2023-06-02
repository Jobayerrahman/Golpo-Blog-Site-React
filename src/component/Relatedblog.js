import withHover from "./Hoc/withHover";
import bannerimage from "../assets/images/mocha.webp";

const Relatedblog = ({relatedBlogCard,onHover,onWithoutHover}) =>{
    return(
        <div className="relatedblog-wrapper">
            <div className="relatedblog-header">
                <h3>You May Like Those</h3>
            </div>
            <div className="relatedblog-cards">
                <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={relatedBlogCard}>
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
                <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={relatedBlogCard}>
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
                <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={relatedBlogCard}>
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
            </div>
        </div>
    )
}

export default withHover(Relatedblog);