import bannerimage from "../../assets/images/mocha.webp";

export default function Bannerposter(){
    return(
        <div className='banner-poster'>
            <img
                className="banner-image"
                src={bannerimage}
                alt="Updating Blog" 
            />
        </div>
    )
}