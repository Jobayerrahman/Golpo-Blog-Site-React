import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Category from "../Category/Category";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";

export default function Banner({banner,blog}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 
    const [title,setTitle] = useState(); 
    const [category,setCategory] = useState(); 
    const [image,setImage] = useState(); 
    const [date,setDate] = useState(); 
    
    useEffect(() => {
        setTitle(blog.title);
        setDate(blog.date);
        setImage(blog.image);
        if(banner === "HomeBanner"){
            setDisplayX("display");
            setCategory(blog.category);
        }
        else if(banner === "CategoryBanner"){
            setDisplayX("display");
            setCategory(blog.category);
        }
        else if(banner === "BlogBanner"){
            setDisplayY("display");
            setCategory(blog.category);
        }
    }, [banner]);
    
    
    // const blogDate = blog.date;
    var parsedDate = new Date(date);
    const options = {  day: 'numeric', year: 'numeric', month: 'long', day: 'numeric' };
    var finalDate = parsedDate.toLocaleDateString("en-GB", options);


    return(
        <div className="banner-wrapper">
            <div className='banner-poster'>
                <img
                    className="banner-image"
                    src={image}
                    alt="Updating Blog" 
                />
            </div>
            <div className='banner-content'>
                <h2>{title}</h2>
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