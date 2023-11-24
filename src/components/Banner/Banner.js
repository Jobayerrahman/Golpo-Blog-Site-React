import { useState,useEffect, Suspense } from "react";
import Socialmediaicon from "../Socialmedia/Socialmediaicon";
import Category from "../Category/Category";
import { Link } from "react-router-dom";

export default function Banner({banner,blog}){
    const [displayX,setDisplayX] = useState("nodisplay"); 
    const [displayY,setDisplayY] = useState("nodisplay"); 
    const [category,setCategory] = useState(); 
    const [image,setImage] = useState(); 
    const [date,setDate] = useState(); 
    
    useEffect(() => {
        setDate(blog.date);
        setImage(blog.image)
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
            <Suspense fallback={<Loading />}>
                <img
                    className="banner-image"
                    src={image}
                    alt="Updating Blog" 
                />
            </Suspense>
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


function Loading() {
    return <h2>🌀 Loading...</h2>;
  }