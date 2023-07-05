import Banner from "../component/Banner/Banner";
import BlogList from "../component/Blog/BlogList";
import Blogcard from "../component/Blog/Blogcard";
import { useParams } from 'react-router';

export default function Cetagorypage(){
    const { cetagory } = useParams();
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
        </div>
    );
}