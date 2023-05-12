import Container from 'react-bootstrap/Container';
import bannerimage from "../assets/images/img.jpg";
import { Button } from 'react-bootstrap';

export default function Banner(){
    return(
        <div>
            <Container>
                <div className="banner-wrapper">
                    <div>
                        <img
                            className="banner-image"
                            src={bannerimage}
                            alt="Updating Blog" 
                        />
                    </div>
                    <div>
                        <h2>Blog title</h2>
                        <span>Some description</span>
                        <Button>Read More</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}