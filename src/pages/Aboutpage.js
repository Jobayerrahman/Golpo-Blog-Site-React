import React from 'react';
import About from '../components/About/About';
import Blogcounter from '../components/Blog/Blogcounter';
import Partner from '../components/Partner/Partner';
import Container from 'react-bootstrap/Container';

function Aboutpage(props) {
    return (
        <Container>
            <About/>
            <Blogcounter/>
            <Partner/>
        </Container>
    );
}

export default Aboutpage;