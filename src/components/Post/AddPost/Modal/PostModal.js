import axios from "axios";
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SuccessMessage from '../../../FlashMessage/SuccessMessage';
import FailedMessage from "../../../FlashMessage/FailedMessage";

function PostModal(props) {
    const { showModal,  onCloseModal } = props;
    const showHiddenModal =  showModal ? "modal display-block": "modal display-none";
    
    const sessionStatus         = sessionStorage.getItem('session');
    const sessionEmail          = sessionStorage.getItem('useremail');
    const sessionFullname       = sessionStorage.getItem('fullname');

    const [ fullName, setFullName ] = useState(sessionStatus ? sessionFullname:'');
    const [ email, setEmail ] = useState(sessionStatus ? sessionEmail:'');
    const [ title, setTitle ] = useState('');
    const [ image, setImage ] = useState('');
    const [ describe, setDescribe ] = useState('');
    
    
    
    const [ message, setMessage ] = useState('');
    const [ flashSuccessMessage, setFlashSuccessMessage ] = useState(false);
    const [ flashFailedMessage, setFlashFailedMessage ] = useState(false);

    const postURL            = "https://jsonserverdatagolpo.onrender.com/user_posts";
    const [posts, setPosts]  = useState([]);
    
    const handleInput = (e) =>{
        const inputValue = e.target.value;
        if(e.target.name === 'fullName'){
            setFullName(inputValue);
        }
        else if(e.target.name === 'email'){
            setEmail(inputValue);
        }
        else if(e.target.name === 'title'){
            setTitle(inputValue);
        }
        else if(e.target.name === 'image'){
            const inputFile  = e.target.files[0].name;
            setImage("https://golpo-blog-site.vercel.app/assets/images/"+inputFile);
        }
        else if(e.target.name === 'describe'){
            setDescribe(inputValue);
        }
    }

    useEffect(() => getBlog(), []);

    const getBlog = () => {
        axios.get(postURL).then((response) => {
        const posts = response.data;
        setPosts(posts);
        });
    }

    let getDate = () =>{
        var today = new Date();
        var day = String(today.getDate()).padStart(2,'0');
        var month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear();
        today = year + '-' + month + '-' + day;
        return today;
    }

    const getNextId = () =>{
        const maxId  = posts.reduce((maxId, post)=> Math.max(post.id, maxId),-1);
        const nextId = maxId + 1;
        return nextId;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fullName !=='' && email !=='' && title !=='' && image !=='' && describe !==''){
            const whiteSpaceReplace = title.replace(/ /g, "");
            const slug = whiteSpaceReplace + `id:${getNextId()}`
            const shortdescription = describe.substring(0, 200);
            const date = getDate();
            const time = new Date().toLocaleTimeString();

            const postObject = {
                id:getNextId(),
                fullName,
                email,
                title,
                slug,
                image,
                describe:shortdescription,
                category:"Posted",
                detail:describe,
                date,
                time,
                comments:[]
            };
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
        setTitle('');
        setImage('');
        setDescribe('');
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
                            <input className="form-control" type="text" name="title" onChange={handleInput} value={title} placeholder="Enter your topic title"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Necessary Picture</Form.Label>
                            <input className="form-control" type="file" name="image" onChange={handleInput}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Write Your Blog or Article</Form.Label>
                            <textarea className="form-control" name="describe" onChange={handleInput} value={describe} rows="10"/>
                        </Form.Group>

                        <a className='userlogin-btn' type="submit" onClick={handleSubmit}> Submit </a>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default PostModal;