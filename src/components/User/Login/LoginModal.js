import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SuccessMessage from '../../FlashMessage/SuccessMessage';
import FailedMessage from '../../FlashMessage/FailedMessage';

function LoginModal(props) {
    const { onShowModal, onCloseModal, handleOpenRegisterModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ flashSuccessMessage, setFlashSuccessMessage ] = useState(false);
    const [ flashFailedMessage, setFlashFailedMessage ] = useState(false);

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
        if(email !=='' && password !=='' ){
            const postObject = {email,password};
            axios.get('https://jsonserverdatagolpo.onrender.com/general_users')
            .then((response) => {
                const userList = response.data;
                if(userList.length !== 0 ){
                    userList.map((user)=>{
                        if(user.email === postObject.email){
                            if(user.password === postObject.password){
                                sessionStorage.setItem('username',user.userName);
                                sessionStorage.setItem('useremail',postObject.email);
                                sessionStorage.setItem('fullname',user.fullName);
                                sessionStorage.setItem('session',true);
                                setFlashSuccessMessage(true);
                                setMessage('Login successfull! Please wait.');
                                setTimeout(()=>{
                                    setFlashSuccessMessage(false);
                                    window.location.reload();
                                },2000)
                                setEmail('');
                                setPassword('');
                            }else{
                                setFlashFailedMessage(true);
                                setMessage("Password is wrong");
                                setTimeout(()=>{
                                    setFlashFailedMessage(false);
                                },2000)
                                setPassword('');
                            }
                        }else{
                            setFlashFailedMessage(true);
                            setMessage("Username is wrong");
                            setTimeout(()=>{
                                setFlashFailedMessage(false);
                            },2000)
                            setEmail('');
                        }
                    })
                }else{
                    setFlashFailedMessage(true);
                    setMessage(`User doesn't exist!`);
                    setTimeout(()=>{
                        setFlashFailedMessage(false);
                    },3000);
                    setEmail('');
                    setPassword('');
                }
            })
            .catch((err) => { 
                setFlashFailedMessage(true);
                setMessage('Login Failed due to : ' + err.message) ;
                setTimeout(()=>{
                    setFlashFailedMessage(false);
                },5000);
                setEmail('');
                setPassword('');
            }); 
        }else{
            setFlashFailedMessage(true);
            setMessage(`Input Field can't be empty`)
            setTimeout(()=>{
                setFlashFailedMessage(false);
            },2000)
        }
    }

    return (
        <div className={showHiddenModal}>
            <div className='usermodal-content userLogin-modal'>
                <div className='usermodal-header'>
                    <h2>Sign in Now</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='usermodal-body'>
                    {flashSuccessMessage? (<SuccessMessage message={message} />):null}
                    {flashFailedMessage? (<FailedMessage message={message} />):null}
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