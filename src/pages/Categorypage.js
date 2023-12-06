import axios from "axios";
import { useParams } from 'react-router';
import { Container } from "react-bootstrap";
import BlogList from "../components/Blog/BlogList";
import Blogcard from "../components/Blog/Blogcard";
import Preloader from '../components/Preloader/Preloader';
import BlogContext from "../components/Library/BlogContext";
import { useEffect, useState, lazy, Suspense } from "react";
import SkeletonBanner from "../components/Skeletons/SkeletonBanner";
const Banner = lazy(() => { return new Promise(resolve => setTimeout(resolve, 5000)).then(() => import("../components/Banner/Banner"));});

export default function Cetagorypage(){
    const blogURL                   = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const blogPerRow                = 6;
    const { category }              = useParams();
    const [blogs, setBlogs]         = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const categorybanner            = "CategoryBanner"; 
    const [next, setNext]           = useState(blogPerRow);

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

    const latestBlog  = categories[Object.keys(bloglist).length-1];
 
    return(
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <Container>
                        <Suspense fallback={<SkeletonBanner/>}>
                            <Banner banner={categorybanner} blog={latestBlog}/>
                        </Suspense>
                        <BlogList blogs={blogs} next={next} handleMoreBlog={handleMoreBlog} handleLessBlog={handleLessBlog}>
                            {bloglist}
                        </BlogList>
                    </Container>
                )
            }
        </>
    );
}