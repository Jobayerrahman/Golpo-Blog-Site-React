import React from 'react';

function PostModal({showModal}) {
    const showHiddenModal =  showModal ? "postmodal display-block": "postmodal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='postmodal-content'>
                <h2>Hello world</h2>
            </div>
        </div>
    );
}

export default PostModal;