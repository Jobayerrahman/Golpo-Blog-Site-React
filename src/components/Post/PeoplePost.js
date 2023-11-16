import React from 'react';
import PostBlog from './PostBlog';

function PeoplePost(props) {
    return (
        <div className='postblogs-container'>
            <PostBlog/>
            <PostBlog/>
            <PostBlog/>
            <PostBlog/>
            <PostBlog/>
        </div>
    );
}

export default PeoplePost;