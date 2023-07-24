import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import {   faTwitterSquare, faFacebookSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
function Contact (props) {
    return (
        <div className='contact-wrapper'>
            <div className='contact-content'>
                <FontAwesomeIcon className='contact-icon'  icon={faEnvelope} />
                <div className='contact-context'>
                    <h4>Email</h4>
                    <p>golpo@gmail.com</p>
                </div>
            </div>
            <div className='contact-content'>
                <FontAwesomeIcon className='contact-icon'  icon={faTwitterSquare} />
                <div className='contact-context'>
                    <h4>Twitter</h4>
                    <p>Twitter.com/golpo</p>
                </div>
            </div>
            <div className='contact-content'>
                <FontAwesomeIcon className='contact-icon'  icon={faFacebookSquare} />
                <div className='contact-context'>
                    <h4>Facebook</h4>
                    <p>facebook.com/golpo</p>
                </div>
            </div>
            <div className='contact-content'>
                <FontAwesomeIcon className='contact-icon'  icon={faInstagramSquare} />
                <div className='contact-context'>
                    <h4>Instagram</h4>
                    <p>instagram.com/golpo</p>
                </div>
            </div>
        </div>
    );
}

export default Contact ;