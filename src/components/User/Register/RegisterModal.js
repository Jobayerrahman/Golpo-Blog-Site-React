import axios from "axios";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SuccessMessage from "../../FlashMessage/SuccessMessage";
import FailedMessage from "../../FlashMessage/FailedMessage";

function RegisterModal(props) {
    const { onShowModal, onCloseModal, handleOpenLoginModal } = props;
    const showHiddenModal =  onShowModal ? "usermodal display-block": "usermodal display-none";

    const [ fullName, setFullName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ flashSuccessMessage, setFlashSuccessMessage ] = useState(false);
    const [ flashFailedMessage, setFlashFailedMessage ] = useState(false);

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
        if(fullName !=='' && email !=='' && userName !=='' && password !=='' && confirmPassword !==''){
            if( password === confirmPassword ){
                let registerObject = {fullName,email,userName,password,confirmPassword};
                axios.get('https://jsonserverdatagolpo.onrender.com/general_users')
                .then((response) => {
                    const userList = response.data;
                    if(userList.length !== 0 ){
                        if(!userList.find((user) => user.email === email)){
                            submitUser(registerObject);
                        }
                        else{
                            setFlashFailedMessage(true);
                            setMessage(`Email already exist!`);
                            setTimeout(()=>{
                                setFlashFailedMessage(false);
                            },3000);
                            setEmail('');
                        }
                    }else{
                        submitUser(registerObject);
                    }
                })
                .catch((err) => { 
                    setFlashFailedMessage(true);
                    setMessage('Data fatching failed due to : ' + err.message) ;
                    setTimeout(()=>{
                        setFlashFailedMessage(false);
                    },5000);
                }); 
                
            }else{
                setFlashFailedMessage(true);
                setMessage(`Password and Confirm Password doesn't match`)
                setTimeout(()=>{
                    setFlashFailedMessage(false);
                },2000)
                setPassword('');
                setConfirmPassword('');
            }
        }else{
            setFlashFailedMessage(true);
            setMessage(`Input Field can't be empty`)
            setTimeout(()=>{
                setFlashFailedMessage(false);
            },2000)
        }
    }

    const submitUser = (userObject) =>{
        axios.post('https://jsonserverdatagolpo.onrender.com/general_users', userObject)
        .then(function (response) {
            setFlashSuccessMessage(true);
            setMessage('Registation Successfully!');
            setTimeout(()=>{
                setFlashSuccessMessage(false);
                window.location.reload();
            },3000);
            setFullName('');
            setEmail('');
            setUserName('');
            setPassword('');
            setConfirmPassword('');
        })
        .catch(function (error) {
            setFlashFailedMessage(true);
            setMessage('Data fatching failed due to : ' + error.message) ;
            setTimeout(()=>{
                setFlashFailedMessage(false);
            },5000);
        });
    }


    return (
        <div className={showHiddenModal}>
            <div className='usermodal-content userRegister-modal'>
                <div className='usermodal-header'>
                    <h2>Register in Now</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='usermodal-body'>
                    {flashSuccessMessage? (<SuccessMessage message={message} />):null}
                    {flashFailedMessage? (<FailedMessage message={message} />):null}
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