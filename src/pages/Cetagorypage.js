import Banner from "../component/Banner";
import BlogList from "../component/BlogList"
import { useParams } from 'react-router';

export default function Cetagorypage(){
    const { cetagory } = useParams();
    return(
        <div>
            <Banner/>
            <BlogList cetagory={cetagory}/>
        </div>
    );
}