import axios from "axios";
import { useEffect, useState, lazy, Suspense } from "react";
import BlogList from "../components/Blog/BlogList"
import Categories from '../components/Category/Categories';
import Blogcard from "../components/Blog/Blogcard";
import YoutubeBanner from "../components/Banner/YoutubeBanner";
import Blogcarousel from "../components/Blog/Blogcarousel";
import Container from 'react-bootstrap/Container';
import AdSpace from "../components/AdSpace/AdSpace";
import Preloader from '../components/Preloader/Preloader';
import BlogContext from "../components/Library/BlogContext";
import SkeletonBanner from "../components/Skeletons/SkeletonBanner";
import SkeletonBlog from "../components/Skeletons/SkeletonBlog";
// const Banner = lazy(() => import("../components/Banner/Banner"));
const Banner = lazy(() => { return new Promise(resolve => setTimeout(resolve, 5000)).then(() => import("../components/Banner/Banner"));});

export default function Homepage(){
    const blogURL = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const homebanner    = "HomeBanner";
    const blogPerRow = 6;
    const [next, setNext] = useState(blogPerRow);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => getBlog(), []);
    useEffect(()=>{
         setTimeout(()=>{
             setIsLoading(false);
        },2500)
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
        const status = response.status;
        if(status === 200 ){
            setIsLoading(false);
        }
        setBlogs(blogs);
        });
    }

    const bloglist      = blogs.slice(0, next).map(blog => (
        <BlogContext.Provider value={{ blogs: blog }}>
            <Blogcard/>
        </BlogContext.Provider>
    ));

    const latestBlog     = blogs[Object.keys(blogs).length-1];

    return(
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <div>
                        <Container>
                            <Suspense fallback={<SkeletonBanner/>}>
                                <Banner banner={homebanner} blog={latestBlog}/>
                            </Suspense>
                            <BlogList blogs={blogs} next={next} handleMoreBlog={handleMoreBlog} handleLessBlog={handleLessBlog}>
                                {bloglist}
                            </BlogList>
                            <AdSpace/>
                            <Categories/>
                            <AdSpace/>
                            <YoutubeBanner/>
                            <AdSpace/>
                        </Container>
                        <Blogcarousel>
                            {bloglist}
                        </Blogcarousel>
                    </div>
                )
            }
        </>
    )
}


