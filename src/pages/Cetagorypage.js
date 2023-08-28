import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList";
import Blogcard from "../components/Blog/Blogcard";
import Preloader from '../components/Preloader/Preloader';
import { Container } from "react-bootstrap";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cetagorypage(){
    const blogURL = "http://localhost:5000/blogs"; 
    const blogPerRow = 6;
    const { cetagory } = useParams();
    const [next, setNext] = useState(blogPerRow);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const cetagorybanner    = "CetagoryBanner"; 

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
    
    const cetagories   = blogs.filter(blog=> blog.cetagory === cetagory);
    const bloglist     = cetagories.slice(0, next).map(blog => <Blogcard key={blog.id} {...blog}/>);
    const latestBlog     = cetagories[Object.keys(bloglist).length-1];

    return(
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <Container>
                        <Banner banner={cetagorybanner} blog={latestBlog}/>
                        <BlogList blogs={blogs} next={next} handleMoreBlog={handleMoreBlog} handleLessBlog={handleLessBlog}>
                            {bloglist}
                        </BlogList>
                    </Container>
                )
            }
        </>
    );
}