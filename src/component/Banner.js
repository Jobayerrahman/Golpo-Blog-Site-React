import Container from 'react-bootstrap/Container';
import Bannerposter from './Bannerposter';
import Mainbannercontent from './Mainbannercontent';

export default function Banner(){
    return(
        <div>
            <Container>
                <div className="banner-wrapper">
                    <Bannerposter/>
                    <Mainbannercontent/>
                </div>
            </Container>
        </div>
    )
}