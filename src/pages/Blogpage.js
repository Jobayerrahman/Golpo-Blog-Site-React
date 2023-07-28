import Blog from "../components/Blog/Blog";
import { Container } from "react-bootstrap";
import Comment from "../components/Comment/Comment";
import Banner from "../components/Banner/Banner";
import Relatedblog from "../components/RelatedBlog/Relatedblog";
import {blogs} from "../Data/Data";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Preloader from '../components/Preloader/Preloader';

export default function Blogpage(){
    const [isLoading, setIsLoading] = useState([true]);
    const blogbanner = "BlogBanner";
    const { id }   = useParams();
    const blog = blogs.find((blog)=> blog.id == id);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    })

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