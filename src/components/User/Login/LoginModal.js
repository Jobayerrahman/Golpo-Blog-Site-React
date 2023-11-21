import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function LoginModal(props) {
    const { showModal, handleCloseModal } = props;
    const showHiddenModal =  showModal ? "usermodal display-block": "usermodal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='usermodal-content'>
                <div className='usermodal-header'>
                    <h2>Sign in Now</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={handleCloseModal} />
                </div>
                <div className='usermodal-body'>
                    <Form className='userLogin-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit"> Submit </Button>
                    </Form>
                    <div className='divider-line'></div>
                    <Button variant="primary" type="submit"> Sign Up </Button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;