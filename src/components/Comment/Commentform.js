import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function Commentform(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [textarea, setTextarea] = useState('');
    const handleInput = (e) =>{
        if(e.target.type ==='text'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setName(inputValue);
        }
        else if(e.target.type === 'email'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setEmail(inputValue);
        }
        else if(e.target.type === 'number'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setContact(inputValue);
        }
        else if(e.target.type === 'textarea'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setTextarea(inputValue);
        }
    }
    return(
        <div className='commentform-wrapper'>
            <Form className='comment-form'>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleInput} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleInput} placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formNumber">
                            <Form.Label>Contact number</Form.Label>
                            <Form.Control type="number" value={contact} onChange={handleInput} placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formTextarea">
                            <Form.Label>Comment</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                as="textarea"
                                style={{ height: '120px' }}
                                value={textarea} 
                                onChange={handleInput}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" style={{ width: '200px' }}>
                            <FontAwesomeIcon icon={faComment} style={{ marginRight: '20px' }} />
                            Post comment
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}