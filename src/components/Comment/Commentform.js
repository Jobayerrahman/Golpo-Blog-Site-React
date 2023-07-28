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
    const [textarea, setTextarea] = useState('');
    const handleInput = (e) =>{
        if(e.target.type ==='text'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setName(inputValue);
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
                            <Form.Label style={{ fontWeight: 700 }}>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleInput} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formTextarea">
                            <Form.Label style={{ fontWeight: 700 }}>Comment</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                as="textarea"
                                style={{ height: '170px' }}
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
                            Send comment
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}