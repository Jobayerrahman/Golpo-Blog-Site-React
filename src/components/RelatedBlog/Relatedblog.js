import '../../assets/css/relatedblog.css';
import axios from "axios";
import { useState,useEffect } from "react";
import BlogContext from "../Library/BlogContext";
import RelatedBlogComponent from "./RelatedBlogComponent";

export default function Relatedblog({cetagory,slug}){
    const blogURL = "http://localhost:5000/blogs"; 
    const [blogs, setBlogs] = useState([]);
    const [isEmpty,setIsEmpty ] = useState(false);

    useEffect(() => getBlog(), []);

    const getBlog = () => {
        axios.get(blogURL).then((response) => {
        const blogs = response.data;
        setBlogs(blogs);
        });
    }

    const blog           = blogs.filter(blog=> blog.cetagory === cetagory && blog.id !== slug);
    const bloglist       = blog.slice(0, 4).map(blog =>(
        <BlogContext.Provider value={{ blogs: blog }}>
            <RelatedBlogComponent />
        </BlogContext.Provider>
    ));

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