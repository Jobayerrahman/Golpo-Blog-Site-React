import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import UserPost from '../components/Post/UserPost';
import Preloader from '../components/Preloader/Preloader';
import TypePost from '../components/Post/TypePost/TypePost';
import CreatePost from '../components/Post/AddPost/CreatePost';

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
                        <CreatePost/>
                        <TypePost/>
                        <UserPost/>
                    </Container>
                )}
        </>
    );
}

export default Postpage;