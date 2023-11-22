import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function RegisterModal(props) {
    const { onShowModal, onCloseModal, handleOpenLoginModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='usermodal-content userRegister-modal'>
                <div className='usermodal-header'>
                    <h2>Register in Now</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='usermodal-body'>
                    <Form className='userLogin-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name*</Form.Label>
                            <Form.Control type="name" placeholder="Enter fullname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name*</Form.Label>
                            <Form.Control type="name" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password*</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <a className='userlogin-btn' type="submit"> Sign Up </a>
                    </Form>
                    <div className='divider-line'></div>
                    <h4>Have any account ?</h4>
                    <a className='userregister-btn' type="submit" onClick={handleOpenLoginModal} > Sign In </a>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;