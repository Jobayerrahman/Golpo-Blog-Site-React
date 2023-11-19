import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PostModal from './Modal/PostModal';

function CreatePost(props) {
    const [ openModal, setOpenModal ] = useState(false);
    const [ closeModal, setCloseModal ] = useState(false);

    const handleModal = (e) =>{
        setOpenModal(true);
    }

    return (
        <div className='createPost-wrapper'>
            <Button className='createPost-Button' onClick={handleModal} >Post Your Write & Thought</Button>
            <PostModal showModal={openModal} />
        </div>
    );
}

export default CreatePost;