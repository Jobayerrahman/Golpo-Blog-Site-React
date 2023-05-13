import Container from 'react-bootstrap/Container';
import bannerimage from "../assets/images/mocha.webp";

export default function Banner(){
    return(
        <div>
            <Container>
                <div className="banner-wrapper">
                    <div className='banner-poster'>
                        <img
                            className="banner-image"
                            src={bannerimage}
                            alt="Updating Blog" 
                        />
                    </div>
                    <div className='banner-content'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                        <span>Nature - 13 May 2023</span>
                        <a>Keep reading...</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}