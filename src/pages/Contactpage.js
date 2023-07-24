import React from 'react';
import Contact from '../components/Contact/Contact ';
import Career from '../components/Career/Career';
import Query from '../components/Query/Query';
import '../assets/css/contact.css';
import Container from 'react-bootstrap/Container';

function Contactpage(props) {
    return (
        <div>
            <Container>
                <Query/>
                <Contact/>
                <Career/>
            </Container>
        </div>
    );
}

export default Contactpage;