import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function LoginModal(props) {
    const { onShowModal, onCloseModal, handleOpenRegisterModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    return (
        <div className={showHiddenModal}>
            <div className='usermodal-content userLogin-modal'>
                <div className='usermodal-header'>
                    <h2>Sign in Now</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='usermodal-body'>
                    <Form className='userLogin-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <a className='userlogin-btn' type="submit"> Sign In </a>
                    </Form>
                    <div className='divider-line'></div>
                    <h4>Don't have any account ?</h4>
                    <a className='userregister-btn' type="submit" onClick={handleOpenRegisterModal} > Sign Up </a>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;