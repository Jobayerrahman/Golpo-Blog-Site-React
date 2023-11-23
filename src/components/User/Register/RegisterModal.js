import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function RegisterModal(props) {
    const { onShowModal, onCloseModal, handleOpenLoginModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    const [ fullName, setFullName ] = useState();
    const [ email, setEmail ] = useState();
    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    const handleInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'fullName'){
            setFullName(inputValue);
        }
        else if(e.target.name === 'email'){
            setEmail(inputValue);
        }
        else if(e.target.name === 'userName'){
            setUserName(inputValue);
        }
        else if(e.target.name === 'password'){
            setPassword(inputValue);
        }
        else if(e.target.name === 'confirmPassword'){
            setConfirmPassword(inputValue);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const postObject = {fullName,email,userName,password,confirmPassword};
        console.log(postObject);
        setFullName('');
        setEmail('');
        setUserName('');
        setPassword('');
        setConfirmPassword('');
    }


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
                            <input className="form-control" type="text" name="fullName" onChange={handleInput} value={fullName} placeholder="Enter fullname"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <input className="form-control" type="email" name="email" onChange={handleInput} value={email} placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name*</Form.Label>
                            <input className="form-control" type="text" name="userName" onChange={handleInput} value={userName} placeholder="Enter username"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password*</Form.Label>
                            <input className="form-control" type="password" name="password" onChange={handleInput} value={password} placeholder="Enter Password"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password*</Form.Label>
                            <input className="form-control" type="password" name="confirmPassword" onChange={handleInput} value={confirmPassword} placeholder="Enter confirm password"/>
                        </Form.Group>

                        <a className='userlogin-btn' type="submit" onClick={handleSubmit}> Sign Up </a>
                    </Form>
                    <div className='divider-line'></div>
                    <h4>Have any account ?</h4>
                    <a className='userregister-btn' onClick={handleOpenLoginModal} > Sign In </a>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;