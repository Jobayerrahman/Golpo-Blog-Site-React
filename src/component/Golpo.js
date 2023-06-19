import Container from 'react-bootstrap/Container';
import Banner from "./Banner";
import Blogs from "./Blogs"
import Blog from "./Blog"
import Catagories from './Catagories';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Golpo(){
    return(
        <div className="body">
            <Navigation/>
            <Container>
                {/* <Banner/>
                <Blogs/>
                <Catagories/> */}
                <Blog/>
            </Container>
            <Footer/>
        </div>
    ); 
}