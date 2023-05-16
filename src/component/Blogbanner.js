import Container from 'react-bootstrap/Container';
import Bannerposter from './Bannerposter';
import Singlebannercontent from './Singlebannercontent';

export default function Blogbanner(){
    return(
        <div>
            <Container>
                <div className="banner-wrapper">
                    <Bannerposter/>
                    <Singlebannercontent/>
                </div>
            </Container>
        </div>
    )
}