import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList"
import Catagories from '../components/Cetagory/Catagories';
import Blogcard from "../components/Blog/Blogcard";
export default function Homepage(){
    const cetagory      = "Nature";
    const homebanner    = "HomeBanner";
    return(
        <div>
            <Banner banner={homebanner}/>
            <BlogList>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
            </BlogList>
            <Catagories/>
        </div>
    )
}