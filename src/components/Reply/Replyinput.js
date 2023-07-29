import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Replyinput({closeReply}) {
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


    return (
        <div>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label style={{ fontWeight: 700 }}>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTextarea">
                    <Form.Label style={{ fontWeight: 700 }}>Comment</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        value={textarea} 
                        onChange={handleInput}
                        />
                    </FloatingLabel>
                </Form.Group>

                <div style={{ textAlign: 'right'}}>
                    <Button variant="primary"   type="submit" style={{ width: '100px', marginRight: '10px'}} onClick={closeReply}>Send</Button>
                    <Button variant="secondary" type="submit" style={{ width: '70px' }} onClick={closeReply} >cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default Replyinput;