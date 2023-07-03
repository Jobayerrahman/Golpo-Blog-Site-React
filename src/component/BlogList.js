import { Container } from "react-bootstrap";
import Blogcard from "./Blogcard";

export default function BlogList({cetagory=null}){
    console.log(cetagory)
    return(
        <Container>
            <div className="blog-list">
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
                <Blogcard cetagory={cetagory}/>
            </div>
        </Container>
    )
}