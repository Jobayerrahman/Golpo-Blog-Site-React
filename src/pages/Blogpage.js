import Blog from "../components/Blog/Blog";
import { Container } from "react-bootstrap";
import Comment from "../components/Comment/Comment";
import Commentform from "../components/Comment/Commentform";
import Banner from "../components/Banner/Banner";
import Relatedblog from "../components/Blog/Relatedblog";
import {blogs} from "../Data/Data";
import { useParams } from 'react-router';

export default function Blogpage(){
    const blogbanner = "BlogBanner";
    const { id }   = useParams();
    const blog = blogs.find((blog)=> blog.id == id);
   return(
    <Container>
        <Banner blog={blog} banner={blogbanner}/>
        <Blog blog={blog}/>
        <Comment/>
        <Commentform/>
        <Relatedblog/>
    </Container>
   ) 
}