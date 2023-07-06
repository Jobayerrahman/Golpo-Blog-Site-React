import { useState,useEffect } from "react";
import bannerimage from "../../assets/images/mocha.webp";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";

export default function Banner({banner}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 

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
                    <p><span className="catagory catagory-nature">Nature</span> - 13 May 2023 12:00pm</p>
                </div>
                <div className={displayX}>
                    <a>Read more...</a>
                </div>
                <div className={displayY}>
                    <Socialmediaicon/>
                </div>
            </div>
        </div>
    )
}