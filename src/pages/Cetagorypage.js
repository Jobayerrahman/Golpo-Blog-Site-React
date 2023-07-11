import Banner from "../components/Banner/Banner";
import BlogList from "../components/Blog/BlogList";
import Blogcard from "../components/Blog/Blogcard";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router';
import {blogs} from "../Data/Data";

export default function Cetagorypage(){
    const { cetagory } = useParams();
    const cetagories   = blogs.filter(blog=> blog.cetagory === cetagory);
    const bloglist     = cetagories.map(blog => <Blogcard {...blog}/>);
    return(
        <div>
            <Container>
                <Banner/>
                <BlogList>
                    {bloglist}
                </BlogList>
            </Container>
        </div>
    );
}