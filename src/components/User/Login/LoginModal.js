import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function LoginModal(props) {
    const { onShowModal, onCloseModal, handleOpenRegisterModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const handleInput = (e) =>{
        const inputValue = e.target.value;
         if(e.target.name === 'email'){
            setEmail(inputValue);
        }
        else if(e.target.name === 'password'){
            setPassword(inputValue);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const postObject = {email,password};
        console.log(postObject);
        setEmail('');
        setPassword('');
    }

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
                            <input className="form-control" type="email" name="email" onChange={handleInput} value={email} placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <input className="form-control" type="password" name="password" onChange={handleInput} value={password} placeholder="Enter password"/>
                        </Form.Group>

                        <a className='userlogin-btn' type="submit" onClick={handleSubmit}> Sign In </a>
                    </Form>
                    <div className='divider-line'></div>
                    <h4>Don't have any account ?</h4>
                    <a className='userregister-btn' onClick={handleOpenRegisterModal} > Sign Up </a>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;