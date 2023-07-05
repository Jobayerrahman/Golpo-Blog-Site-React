import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList";
import Blogcard from "../components/Blog/Blogcard";
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