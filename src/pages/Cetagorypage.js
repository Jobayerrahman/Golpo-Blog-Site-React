import Banner from "../component/Banner";
import BlogList from "../component/BlogList";
import Blogcard from "../component/Blogcard";
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