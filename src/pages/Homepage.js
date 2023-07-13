import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList"
import Catagories from '../components/Cetagory/Catagories';
import Blogcard from "../components/Blog/Blogcard";
import {blogs} from "../Data/Data";
import YoutubeBanner from "../components/Banner/YoutubeBanner";
import Blogcarousel from "../components/Blog/Blogcarousel";
import Container from 'react-bootstrap/Container';
import AdSpace from "../components/AdSpace/AdSpace";
export default function Homepage(){
    const homebanner    = "HomeBanner";
    const bloglist      = blogs.map(blog => 
        <Blogcard {...blog}/>
        );
    return(
        <div>
            <Container>
                <Banner banner={homebanner}/>
                <BlogList>
                    {bloglist}
                </BlogList>
                <AdSpace/>
                <Catagories/>
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