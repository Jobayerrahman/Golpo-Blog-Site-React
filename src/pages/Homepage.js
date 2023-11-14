import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList"
import Categories from '../components/Category/Categories';
import Blogcard from "../components/Blog/Blogcard";
import YoutubeBanner from "../components/Banner/YoutubeBanner";
import Blogcarousel from "../components/Blog/Blogcarousel";
import Container from 'react-bootstrap/Container';
import AdSpace from "../components/AdSpace/AdSpace";
import Preloader from '../components/Preloader/Preloader';
import BlogContext from "../components/Library/BlogContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage(){
    const blogURL = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const homebanner    = "HomeBanner";
    const blogPerRow = 6;
    const [next, setNext] = useState(blogPerRow);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

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
                            <Banner banner={homebanner} blog={latestBlog}/>
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