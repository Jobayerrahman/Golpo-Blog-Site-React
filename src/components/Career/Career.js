import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
function Career(props) {
    const [textarea, setTextarea] = useState('');
    const handleInput = (e) =>{
        if(e.target.type === 'textarea'){
            const inputValue = e.target.value;
            console.log(inputValue);
            setTextarea(inputValue);
        }
    }
    return (
        <div className='career-wrapper'>
            <div className='career-test'>
                <h4>Tell Something About Yourself</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formTextarea">
                        <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                            as="textarea"
                            className="career-textinput"
                            value={textarea} 
                            onChange={handleInput}
                            placeholder="Disabled readonly input"
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Form>
                <a>Send</a>
            </div>
            <div className='career-introduction'>
                <h6>Golpo Career</h6>
                <h2>Join with Us as Content writer and Researcher</h2>
                {/* <a>Send Your CV</a> */}
            </div>
        </div>
    );
}

export default Career;