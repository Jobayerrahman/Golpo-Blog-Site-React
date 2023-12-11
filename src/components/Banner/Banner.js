import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Category from "../Category/Category";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import SkeletonBannerImage from "../Skeletons/SkeletonBannerImage";

export default function Banner({banner, blog=""} ){
    const [displayX,setDisplayX]    = useState("nodisplay"); 
    const [displayY,setDisplayY]    = useState("nodisplay"); 
    const [displayZ,setDisplayZ]    = useState("nodisplay"); 
    
    useEffect(() => {
        if(banner === "HomeBanner"){
            setDisplayX("display");
        }
        else if(banner === "CategoryBanner"){
            setDisplayX("display");
        }
        else if(banner === "BlogBanner"){
            setDisplayY("display");
        }
        else if(banner === "PostBanner"){
            setDisplayZ("display");
        }
    }, [banner]);


    const blogDate    = blog.date;
    var parsedDate    = new Date(blogDate);
    const options     = {  day: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var finalDate     = parsedDate.toLocaleDateString("en-GB", options);

    return(
        <div className="banner-wrapper">
            <div className='banner-poster'>
                <img
                    className="banner-image"
                    src={blog.image}
                    alt={<SkeletonBannerImage/>} 
                />
            </div>
            <div className='banner-content'>
                <h2>{blog.title}</h2>
                <div className='blog-info'>
                    <Category category={blog.category}/>
                    <p> - {finalDate} 12:00pm</p>
                </div>
                <div className={'mt-4 '+displayX} style={{ width: '100%' }}>
                    <Link to={`/blog/${blog.slug}`}>Read more</Link>
                </div>
                <div className={displayY}>
                    <Socialmediaicon/>
                </div>
                <div className={displayZ}>
                    <div className='blog-info'>
                        <p>Owner Name - {blog.fullName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}