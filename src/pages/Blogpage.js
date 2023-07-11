import Blog from "../components/Blog/Blog";
import { Container } from "react-bootstrap";

export default function Blogpage(){
    const blogbanner = "BlogBanner";
   return(
    <Container>
        <Blog banner={blogbanner}/>
    </Container>
   ) 
}