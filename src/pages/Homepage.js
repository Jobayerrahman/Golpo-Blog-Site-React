import axios from "axios";
import { useEffect, useState, lazy, Suspense } from "react";
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
import Banner from "../components/Banner/Banner";
// const Banner = lazy(() => { return new Promise(resolve => setTimeout(resolve, 5000)).then(() => import("../components/Banner/Banner"));});
const BlogList = lazy(() => { return new Promise(resolve => setTimeout(resolve, 3000)).then(() => import("../components/Blog/BlogList"));});

export default function Homepage(){
    const blogURL                               = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const homebanner                            = "HomeBanner";
    const blogPerRow                            = 6;
    const [next, setNext]                       = useState(blogPerRow);
    const [blogs, setBlogs]                     = useState([]);
    const [isLoading, setIsLoading]             = useState(true);
    const [latestBlog, setLatestBlogs]          = useState({});
    const [isBannerLoading, setIsBannerLoading] = useState(false);

    useEffect(() => getBlog(), []);
    useEffect(()=>{
         setTimeout(()=>{
             setIsLoading(false);
        },2500)
    })
    
    const getBlog = () => {
        axios.get(blogURL).then((response) => {
            const blogs = response.data;
            const status = response.status;
            if(status === 200 ){
                setIsLoading(false);
            }
            setBlogs(blogs);
            getlatestBlog(blogs);
        });
    }

    const getlatestBlog = (blogs) =>{
        const latest = blogs[Object.keys(blogs).length-1];
        setLatestBlogs(latest);
        setIsBannerLoading(true);
    }

    const bloglist      = blogs.slice(0, next).map(blog => (
        <BlogContext.Provider value={{ blogs: blog }}>
            <Blogcard/>
        </BlogContext.Provider>
    ));

    const blogSkeletonList = [...Array(6).keys()].map(i => {
        return <SkeletonBlog key={i} />
    })

    const handleMoreBlog = () => {
        setNext(next + blogPerRow);
    };

    const handleLessBlog = () => {
        setNext(next - blogPerRow);
    };

    return(
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <div>
                        <Container>
                            {isBannerLoading ? <Banner banner={homebanner} blog={latestBlog}/> : <SkeletonBanner/>  }
                            <Suspense fallback={<div className="blog-list">{blogSkeletonList}</div>}>
                                <BlogList blogs={blogs} next={next} handleMoreBlog={handleMoreBlog} handleLessBlog={handleLessBlog}>
                                    {bloglist}
                                </BlogList>
                            </Suspense>
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


