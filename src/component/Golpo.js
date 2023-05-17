import Container from 'react-bootstrap/Container';
import Banner from "./Banner";
import Blogbanner from "./Blogbanner";
import Blog from "./Blog";

export default function Golpo(){
    return(
        <div className="body">
            <Container>
                <Blog/>
            </Container>
        </div>
    ); 
}