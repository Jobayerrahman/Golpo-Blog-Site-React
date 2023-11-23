import React from 'react';
import '../../assets/css/message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function SuccessMessage() {
    return (
        <div className='message-wrapper success-message'>
            <h4>Oparetion Successfully</h4>
            <FontAwesomeIcon className='message-icon' icon={faCircleXmark}  />
        </div>
    );
}

export default SuccessMessage;