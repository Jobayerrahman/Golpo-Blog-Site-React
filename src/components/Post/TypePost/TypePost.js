import React from 'react';
import TypePostButton from './TypePostButton';

function TypePost() {
    return (
        <div className='typePost-wrapper'>
            <TypePostButton Title="All Post"/>
            <TypePostButton Title="My Post"/>
        </div>
    );
}

export default TypePost;