import Blog from "../components/Blog/Blog";
import { Container } from "react-bootstrap";
import Comment from "../components/Comment/Comment";
import Banner from "../components/Banner/Banner";
import Relatedblog from "../components/RelatedBlog/Relatedblog";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from '../components/Preloader/Preloader';

export default function Blogpage(){
    const blogURL = "http://localhost:5000/blogs"; 
    const [isLoading, setIsLoading] = useState([true]);
    const [blogs, setBlogs] = useState([]);
    const blogbanner = "BlogBanner";
    const { id }   = useParams();


    useEffect(() => getBlog(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    })


    const getBlog = () => {
        axios.get(blogURL).then((response) => {
        const blogs = response.data;
        setBlogs(blogs);
        });
    }


    const blog = blogs.find((blog)=> blog.id == id);


   return(
    <>
        {
            isLoading ? <Preloader/> : (
                <Container>
                    <Banner blog={blog} banner={blogbanner}/>
                    <Blog blog={blog}/>
                    <Comment comments={blog.comments}/>
                    <Relatedblog slug={blog.id} cetagory={blog.cetagory}/>
                </Container>
            )
        }
    </>
   ) 
}