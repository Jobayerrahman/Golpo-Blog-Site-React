import Commentform from "./Commentform";
import SingleCommentComponent from "./SingleCommentComponent";
import CommentContext from "../Library/CommentContext";
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/comment.css';

export default function Comment({comments}){
    const [name, setName] = useState('');
    const [textarea, setTextarea] = useState('');
    const [commentList, setCommentList] = useState([
        {comment:{commentorName: 'Jonh dove', commentorMessage: 'He is the first Commentator'}}
    ]);
    const handleInput = (e) =>{
        if(e.target.type ==='text'){
            const inputValue = e.target.value;
            setName(inputValue);
        }
        else if(e.target.type === 'textarea'){
            const inputValue = e.target.value;
            setTextarea(inputValue);
        }
    }

    const handleComment = (e) =>{
        setCommentList([...commentList, {comment:{commentorName: name, commentorMessage: textarea}}])
        setName('');
        setTextarea('');
    }

    // const commentlist     = comments.map((comment)=>{<SingleCommentComponent {...comment} />});

    return(
        <div className="comment-wrapper">
            <div className="comment-header">
                <h2>Leave you comment here</h2>
            </div>
            <Row>
                <Col><Commentform name={name} textarea={textarea} input={handleInput} comment={handleComment}/></Col>
                <Col>
                    <div className="comment-section">
                            {commentList.map((comment, index )=> (
                                <CommentContext.Provider value={{ indexKey:index, comment:comment }}>
                                    <SingleCommentComponent />
                                </CommentContext.Provider>
                            ))}
                        {/* {commentlist} */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}