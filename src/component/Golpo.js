import Container from 'react-bootstrap/Container';
import Banner from "./Banner";
import Blogs from "./Blogs"
import Catagories from './Catagories';

export default function Golpo(){
    return(
        <div className="body">
            <Container>
                <Banner/>
                <Blogs/>
                <Catagories/>
            </Container>
        </div>
    ); 
}