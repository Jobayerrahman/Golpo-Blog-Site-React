import axios from "axios";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SuccessMessage from '../../../FlashMessage/SuccessMessage';
import FailedMessage from "../../../FlashMessage/FailedMessage";

function PostModal(props) {
    const { showModal,  onCloseModal } = props;
    const showHiddenModal =  showModal ? "modal display-block": "modal display-none";

    const [ fullName, setFullName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ topicTitle, setTopicTitle ] = useState('');
    const [ files, setFiles ] = useState('');
    const [ textarea, setTextarea ] = useState('');

    const sessionStatus         = sessionStorage.getItem('session');
    const sessionEmail          = sessionStorage.getItem('useremail');
    const sessionFullname       = sessionStorage.getItem('fullname');


    const [ message, setMessage ] = useState('');
    const [ flashSuccessMessage, setFlashSuccessMessage ] = useState(false);
    const [ flashFailedMessage, setFlashFailedMessage ] = useState(false);

    const handleInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'fullName'){
            sessionStatus? setFullName(sessionFullname) : setFullName(inputValue);
        }
        else if(e.target.name === 'email'){
            sessionStatus? setEmail(sessionEmail) : setEmail(inputValue);
        }
        else if(e.target.name === 'topicTitle'){
            setTopicTitle(inputValue);
        }
        else if(e.target.name === 'files'){
            setFiles(inputValue);
        }
        else if(e.target.name === 'textarea'){
            setTextarea(inputValue);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fullName !=='' && email !=='' && topicTitle !=='' && files !=='' && textarea !==''){
            const postObject = {fullName,email,topicTitle,files,textarea};
            axios.post('https://jsonserverdatagolpo.onrender.com/user_posts', postObject)
              .then(function () {
                setFlashSuccessMessage(true);
                setTimeout(()=>{
                    setFlashSuccessMessage(false);
                    window.location.reload();
                },3000)
              })
              .catch(function (error) {
                setFlashFailedMessage(true);
                setMessage(error)
                setTimeout(()=>{
                    setFlashFailedMessage(false);
                },2000)
              });
        }else{
            setFlashFailedMessage(true);
            setMessage(`Input Field Can't be empty`)
            setTimeout(()=>{
                setFlashFailedMessage(false);
            },2000)
        }
        setFullName('');
        setEmail('');
        setTopicTitle('');
        setFiles('');
        setTextarea('');
    }

    return (
        <div className={showHiddenModal}>
            <div className='modal-content postModal'>
                <div className='modal-header'>
                    <h2>Post A Blog or Article</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='modal-body'>
                    {flashSuccessMessage? (<SuccessMessage message={message} />):null}
                    {flashFailedMessage? (<FailedMessage message={message} />):null}
                    <Form className='modal-form'>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name*</Form.Label>
                            {sessionStatus ? (
                                <input className="form-control" type="text" name="fullName" onChange={handleInput} value={sessionFullname} placeholder="Enter your fullname" readOnly/>
                            ):(
                                <input className="form-control" type="text" name="fullName" onChange={handleInput} value={fullName} placeholder="Enter your fullname"/>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email address*</Form.Label>
                            {sessionStatus ? (
                                <input className="form-control" type="email" name="email" onChange={handleInput} value={sessionEmail} placeholder="Enter your email" readOnly/>
                            ):(
                                <input className="form-control" type="email" name="email" onChange={handleInput} value={email} placeholder="Enter your email"/>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Topic Title*</Form.Label>
                            <input className="form-control" type="text" name="topicTitle" onChange={handleInput} value={topicTitle} placeholder="Enter your topic title"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Necessary Picture</Form.Label>
                            <input className="form-control" type="file" name="files" onChange={handleInput} value={files}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Write Your Blog or Article</Form.Label>
                            <textarea className="form-control" name="textarea" onChange={handleInput} value={textarea} rows="10"/>
                        </Form.Group>

                        <a className='userlogin-btn' type="submit" onClick={handleSubmit}> Submit </a>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default PostModal;