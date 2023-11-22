import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PostModal from './Modal/PostModal';

function CreatePost(props) {
    const [ openModal, setOpenModal ] = useState(false);

    const handleOpenModal = (e) =>{
        setOpenModal(true);
    }

    const handleCloseModal = (e) =>{
        setOpenModal(false);
    }

    return (
        <div className='createPost-wrapper'>
            <Button className='createPost-Button' onClick={handleOpenModal} >Post Your Write & Thought</Button>
            <PostModal showModal={openModal} onCloseModal={handleCloseModal} />
        </div>
    );
}

export default CreatePost;