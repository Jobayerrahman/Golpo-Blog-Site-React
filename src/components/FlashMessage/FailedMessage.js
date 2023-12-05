import React from 'react';
import '../../assets/css/message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function FailedMessage({message}) {
    return (
        <div className='message-wrapper failed-message'>
            <h4>{message}</h4>
            <FontAwesomeIcon className='message-icon' icon={faCircleXmark}  />
        </div>
    );
}

export default FailedMessage;