import bannerimage from "../assets/images/mocha.webp";
export default function Catagorybanner(){
    return(
        <div>
            <img
                className="banner-image"
                src={bannerimage}
                alt="Updating Blog" 
            />
        </div>
    )
}