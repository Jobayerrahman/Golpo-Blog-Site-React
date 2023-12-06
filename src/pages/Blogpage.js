import axios from "axios";
import { useParams } from 'react-router';
import Blog from "../components/Blog/Blog";
import { Container } from "react-bootstrap";
import Comment from "../components/Comment/Comment";
import Preloader from '../components/Preloader/Preloader';
import { useEffect, useState, lazy, Suspense } from "react";
import Relatedblog from "../components/RelatedBlog/Relatedblog";
import SkeletonBanner from "../components/Skeletons/SkeletonBanner";
const Banner = lazy(() => { return new Promise(resolve => setTimeout(resolve, 5000)).then(() => import("../components/Banner/Banner"));});

export default function Blogpage(){
    const blogURL                   = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const { slug }                  = useParams();
    const blogbanner                = "BlogBanner";
    const [blogs, setBlogs]         = useState([]);
    const [isLoading, setIsLoading] = useState([true]);


    useEffect(() => getBlog(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    })

    console.log(slug);

    const getBlog = () => {
        axios.get(blogURL).then((response) => {
        const blogs = response.data;
        setBlogs(blogs);
        });
    }


    const blog = blogs.find((blog)=> blog.slug == slug);


   return(
    <>
        {
            isLoading ? <Preloader/> : (
                <Container>
                    <Suspense fallback={<SkeletonBanner/>}>
                        <Banner blog={blog} banner={blogbanner}/>
                    </Suspense>
                    <Blog blog={blog}/>
                    <Comment comments={blog.comments}/>
                    <Relatedblog slug={blog.id} cetagory={blog.cetagory}/>
                </Container>
            )
        }
    </>
   ) 
}