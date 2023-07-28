import RelatedBlogComponent from "./RelatedBlogComponent";
import '../../assets/css/relatedblog.css';
import {blogs} from "../../Data/Data";
import { useState } from "react";
import { useEffect } from "react";

export default function Relatedblog({cetagory,slug}){
    const [isEmpty,setIsEmpty ] = useState(false);
    const blog           = blogs.filter(blog=> blog.cetagory === cetagory && blog.id !== slug);
    const bloglist       = blog.slice(0, 4).map(blog =><RelatedBlogComponent {...blog} />);
    console.log(bloglist);
    useEffect(()=>{
        if(bloglist.every(item => Object.keys(item).length === 0)){
            setIsEmpty(true)
        }   
    })
    return(
        <div className="relatedblog-wrapper">
            <div className="relatedblog-header">
                <h3>You May Like Those</h3>
            </div>
            <div className="relatedblog-content">
                {isEmpty ? (<h4>No Blog Available</h4>):(<div className="relatedblog-cards">{bloglist}</div>)}
            </div>
        </div>
    )
}