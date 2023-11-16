import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import PeoplePost from '../components/Post/PeoplePost';
import Preloader from '../components/Preloader/Preloader';

function Postpage(props) {
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    })
    
    return (
        <>
            {isLoading ? (<Preloader/>) :(
                    <Container>
                            <PeoplePost/>
                    </Container>
                )}
        </>
    );
}

export default Postpage;