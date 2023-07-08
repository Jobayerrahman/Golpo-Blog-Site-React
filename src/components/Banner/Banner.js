import { useState,useEffect } from "react";
import bannerimage from "../../assets/images/mocha.webp";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Cetagory from "../Cetagory/Cetagory";

export default function Banner({banner}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 
    const cetagory               = "History"
    useEffect(() => {
        if(banner === "HomeBanner"){
            setDisplayX("display");
        }
        else if(banner === "BlogBanner"){
            setDisplayY("display");
        }
    }, [banner]);
    
    return(
        <div className="banner-wrapper">
            <div className='banner-poster'>
                <img
                    className="banner-image"
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className='banner-content'>
                <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                <div className='blog-info'>
                    <Cetagory cetagory={cetagory}/>
                    <p> - 13 May 2023 12:00pm</p>
                </div>
                <div className={'mt-3 '+displayX}>
                    <a>Read more...</a>
                </div>
                <div className={displayY}>
                    <Socialmediaicon/>
                </div>
            </div>
        </div>
    )
}