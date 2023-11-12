import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList";
import Blogcard from "../components/Blog/Blogcard";
import Preloader from '../components/Preloader/Preloader';
import BlogContext from "../components/Library/BlogContext";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cetagorypage(){
    const blogURL = "http://localhost:5000/blogs"; 
    const blogPerRow = 6;
    const { category } = useParams();
    const [next, setNext] = useState(blogPerRow);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const categorybanner    = "CategoryBanner"; 

    useEffect(() => getBlog(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1500)
    })


    const handleMoreBlog = () => {
        setNext(next + blogPerRow);
      };

    const handleLessBlog = () => {
        setNext(next - blogPerRow);
      };

    
    const getBlog = () => {
        axios.get(blogURL).then((response) => {
        const blogs = response.data;
        setBlogs(blogs);
        });
    }
    
    const categories   = blogs.filter(blog=> blog.category === category);
    const bloglist     = categories.slice(0, next).map(blog => (
        <BlogContext.Provider value={{ blogs: blog }}>
            <Blogcard/>
        </BlogContext.Provider>
    ));
    const latestBlog     = categories[Object.keys(bloglist).length-1];
 
    return(
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <Container>
                        <Banner banner={categorybanner} blog={latestBlog}/>
                        <BlogList blogs={blogs} next={next} handleMoreBlog={handleMoreBlog} handleLessBlog={handleLessBlog}>
                            {bloglist}
                        </BlogList>
                    </Container>
                )
            }
        </>
    );
}