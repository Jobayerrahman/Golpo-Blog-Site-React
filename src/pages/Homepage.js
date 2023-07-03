import Banner from "../component/Banner";
import BlogList from "../component/BlogList"
import Catagories from '../component/Catagories';
import Blogcard from "../component/Blogcard";
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