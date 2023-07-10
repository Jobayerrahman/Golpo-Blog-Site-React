import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList"
import Catagories from '../components/Cetagory/Catagories';
import Blogcard from "../components/Blog/Blogcard";
import {blogs} from "../Data/Data";
import YoutubeBanner from "../components/Banner/YoutubeBanner";
import Blogcarousel from "../components/Blog/Blogcarousel";
export default function Homepage(){
    const homebanner    = "HomeBanner";
    const bloglist      = blogs.map(blog => 
        // <Blogcard title={blog.title} cetagory={blog.cetagory} date={blog.date} time={blog.time} image={blog.image}/>
        <Blogcard {...blog}/>
        );
    return(
        <div>
            <Banner banner={homebanner}/>
            <BlogList>
                {bloglist}
            </BlogList>
            <Catagories/>
            <YoutubeBanner/>
            <Blogcarousel>
                {bloglist}
            </Blogcarousel>
        </div>
    )
}