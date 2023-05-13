import { Container } from "react-bootstrap";
import Blogcard from "./Blogcard";

export default function Blogs(){
    return(
        <Container>
            <div className="blog-list">
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
                <Blogcard/>
            </div>
        </Container>
    )
}