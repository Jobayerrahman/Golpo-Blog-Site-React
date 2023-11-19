import React from 'react';

function PostModal({showModal}) {
    const showHiddenModal =  showModal ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='modal-content'>
                <h2>Hello world</h2>
            </div>
        </div>
    );
}

export default PostModal;