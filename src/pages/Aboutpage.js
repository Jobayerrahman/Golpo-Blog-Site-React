import React from 'react';
import About from '../components/About/About';
import Blogcounter from '../components/Blog/Blogcounter';
import Partner from '../components/Partner/Partner';
import Container from 'react-bootstrap/Container';
import '../assets/css/about.css';
import Contact from '../components/Contact/Contact ';
import Career from '../components/Career/Career';
import Query from '../components/Query/Query';
function Aboutpage(props) {
    return (
        <>
        <Container>
            <About/>
            <Blogcounter/>
            <Query/>
            <Contact/>
            <Career/>
        </Container>
        <Partner/>
        </>
    );
}

export default Aboutpage;