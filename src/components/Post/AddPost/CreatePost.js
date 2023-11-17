import React from 'react';
import { Button } from 'react-bootstrap';

function CreatePost(props) {
    return (
        <div className='createPost-wrapper'>
            <Button className='createPost-Button' >Post Your Write & Thought</Button>
        </div>
    );
}

export default CreatePost;