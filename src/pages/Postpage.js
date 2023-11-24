import axios from "axios";
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import UserPost from '../components/Post/UserPost';
import Preloader from '../components/Preloader/Preloader';
import TypePost from '../components/Post/TypePost/TypePost';
import CreatePost from '../components/Post/AddPost/CreatePost';

function Postpage() {
    const postURL = "https://jsonserverdatagolpo.onrender.com/user_posts"; 
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => getBlog(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    })

    

    const getBlog = () => {
        axios.get(postURL).then((response) => {
        const posts = response.data;
        setPosts(posts);
        });
    }
    
    return (
        <>
            {isLoading ? (<Preloader/>) :(
                    <Container>
                        <CreatePost/>
                        <TypePost/>
                        <UserPost posts={posts}/>
                    </Container>
                )}
        </>
    );
}

export default Postpage;