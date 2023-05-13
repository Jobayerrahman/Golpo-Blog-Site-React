import bannerimage from "../assets/images/mocha.webp";

export default function Blogcard(){
    return(
        <div className="blog-card">
            <div className="blog-poster">
                <img
                    className="blog-image"
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className="blog-content">
                <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                <p><span>Nature</span> - 13 May 2023 12:00pm</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </div>
        </div>
    )
}