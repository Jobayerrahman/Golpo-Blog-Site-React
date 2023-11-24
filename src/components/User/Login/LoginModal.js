import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function LoginModal(props) {
    const { onShowModal, onCloseModal, handleOpenRegisterModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    const handleInput = (e) =>{
        const inputValue = e.target.value;
         if(e.target.name === 'username'){
            setUsername(inputValue);
        }
        else if(e.target.name === 'password'){
            setPassword(inputValue);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const postObject = {username,password};

        axios.get('https://jsonserverdatagolpo.onrender.com/general_users')
        .then((response) => {
            response.data.map((user)=>{
                if(user.userName === postObject.username){
                    if(user.password === postObject.password){
                        console.log("Login successfull");
                        sessionStorage.setItem('username',postObject.username);
                        sessionStorage.setItem('session',true);
                        window.location.reload();
                    }else{
                        console.log("Password is wrong");
                    }
                }else{
                    console.log("Username is wrong");
                }
            })
        })
        .catch((err) => { console.log('Login Failed due to :' + err.message) });

        console.log(postObject.password);
        setUsername('');
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
                            <input className="form-control" type="username" name="username" onChange={handleInput} value={username} placeholder="Enter email"/>
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