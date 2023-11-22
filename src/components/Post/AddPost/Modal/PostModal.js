import React from 'react';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function PostModal(props) {
    const { showModal,  onCloseModal } = props;
    const showHiddenModal =  showModal ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenModal}>
            <div className='modal-content postModal'>
                <div className='modal-header'>
                    <h2>Post A Blog or Article</h2>
                    <FontAwesomeIcon className='navigation-icon' icon={faCircleXmark} onClick={onCloseModal} />
                </div>
                <div className='modal-body'>
                    <Form className='modal-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name*</Form.Label>
                            <Form.Control type="name" placeholder="Enter your fullname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Topic Title*</Form.Label>
                            <Form.Control type="text" placeholder="Enter your topic title" />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Necessary Picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write Your Blog or Article</Form.Label>
                            <Form.Control as="textarea" rows={10} />
                        </Form.Group>

                        <a className='userlogin-btn' type="submit"> Submit </a>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default PostModal;