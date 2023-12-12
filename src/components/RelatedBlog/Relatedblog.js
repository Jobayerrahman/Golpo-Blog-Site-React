import '../../assets/css/relatedblog.css';
import axios from "axios";
import { useState,useEffect } from "react";
import BlogContext from "../Library/BlogContext";
import RelatedBlogComponent from "./RelatedBlogComponent";

export default function Relatedblog({category,slug}){
    const blogURL = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty,setIsEmpty ] = useState(false);

    useEffect(() => getBlog(), []);

    const getBlog = () => {
        setIsLoading(false)
        axios.get(blogURL).then((response) => {
        const blogs = response.data;
        setBlogs(blogs);
        setIsLoading(true);
        });
    }

    const blog           = blogs.filter(blog=> blog.category === category && blog.id !== slug);
    const bloglist       = blog.slice(0, 3).map(blog =>(
        <BlogContext.Provider value={{ blogs: blog }}>
            <RelatedBlogComponent />
        </BlogContext.Provider>
    ));

    // useEffect(()=>{
    //     if(bloglist.every(item => Object.keys(item).length === 0)){
    //         setIsEmpty(false);
    //     }   
    // })
    

    return(
        <div className="relatedblog-wrapper">
            <div className="relatedblog-header">
                <h3>You May Like Those</h3>
            </div>
            <div className="relatedblog-content">{isLoading? (
                bloglist.length ===0 ? (<h4>No Blog Available</h4>):(<div className="relatedblog-cards">{bloglist}</div>)
            ) : (
                <h4>Loading....</h4>
            )}
            </div>
        </div>
    )
}