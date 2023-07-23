import React from 'react';
import Contact from '../components/Contact/Contact ';
import Career from '../components/Career/Career';
import Query from '../components/Query/Query';

function Contactpage(props) {
    return (
        <div>
            <Query/>
            <Contact/>
            <Career/>
        </div>
    );
}

export default Contactpage;