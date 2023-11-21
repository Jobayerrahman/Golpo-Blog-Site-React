import React from 'react';

function RegisterModal({showModal}) {
    const showHiddenModal =  showModal ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='modal-content'>
                <h2>Register Modal</h2>
            </div>
        </div>
    );
}

export default RegisterModal;