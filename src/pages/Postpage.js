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

export default function Postpage(){
    const postURL                   = "https://jsonserverdatagolpo.onrender.com/user_posts"; 
    const { slug }                  = useParams();
    const postbanner                = "PostBanner";
    const [posts, setPosts]         = useState([]);
    const [isLoading, setIsLoading] = useState([true]);


    useEffect(() => getBlog(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },4000)
    })


    const getBlog = () => {
        axios.get(postURL).then((response) => {
        const posts = response.data;
        setPosts(posts);
        });
    }


    const post = posts.find((post)=> post.slug == slug);


   return(
    <>
        {
            isLoading ? <Preloader/> : (
                <Container>
                    <Suspense fallback={<SkeletonBanner/>}>
                        <Banner blog={post} banner={postbanner}/>
                    </Suspense>
                    <Blog blog={post}/>
                    <Comment comments={post.comments}/>
                    <Relatedblog slug={post.id} cetagory={post.cetagory}/>
                </Container>
            )
        }
    </>
   ) 
}