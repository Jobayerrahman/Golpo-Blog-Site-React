import Banner from "../component/Banner/Banner";
import BlogList from "../component/Blog/BlogList"
import Catagories from '../component/Cetagory/Catagories';
import Blogcard from "../component/Blog/Blogcard";
export default function Homepage(){
    const cetagory = "Nature";
    return(
        <div>
            <Banner/>
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