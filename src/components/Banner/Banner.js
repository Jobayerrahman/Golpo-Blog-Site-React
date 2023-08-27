import { useState,useEffect } from "react";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Cetagory from "../Cetagory/Cetagory";
import { Link } from "react-router-dom";

export default function Banner({banner,blog}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 
    const cetagory               = blog.cetagory
    useEffect(() => {
        if(banner === "HomeBanner"){
            setDisplayX("display");
        }
        else if(banner === "CetagoryBanner"){
            setDisplayX("display");
        }
        else if(banner === "BlogBanner"){
            setDisplayY("display");
        }
    }, [banner]);
    
    
    const blogDate = blog.date;
    var parsedDate = new Date(blogDate);
    const options = {  day: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var finalDate = parsedDate.toLocaleDateString("en-GB", options);


    return(
        <div className="banner-wrapper">
            <div className='banner-poster'>
                <img
                    className="banner-image"
                    src={blog.image}
                    alt="Updating Blog" 
                />
            </div>
            <div className='banner-content'>
                <h2>{blog.title}</h2>
                <div className='blog-info'>
                    <Cetagory cetagory={cetagory}/>
                    <p> - {finalDate} 12:00pm</p>
                </div>
                <div className={'mt-4 '+displayX} style={{ width: '100%' }}>
                    <Link to={`/blog/${blog.id}`}><a>Read more</a></Link>
                </div>
                <div className={displayY}>
                    <Socialmediaicon/>
                </div>
            </div>
        </div>
    )
}