import React from 'react';
import ViewPost from './ViewPost/ViewPost';

function UserPost(props) {
    return (
        <div className='postblogs-container'>
            <ViewPost/>
            <ViewPost/>
            <ViewPost/>
        </div>
    );
}

export default UserPost;