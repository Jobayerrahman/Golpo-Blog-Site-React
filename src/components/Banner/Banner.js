import { useState,useEffect } from "react";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

export default function Banner({banner,blog}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 
    const category               = blog.category
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
                    <Category category={category}/>
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