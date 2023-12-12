import withHover from "../Hoc/withHover";
import profile from "../../assets/images/profile.jpg";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Replyinput from "../Reply/Replyinput";
import CommentContext from "../Library/CommentContext";
import { useContext } from "react";

const Singlecomment=({hoverEffect,onHover,onWithoutHover,isHover})=>{

    const context  = useContext(CommentContext);
    const { comment } = context;

    const [isDisplay, setIsDiplay] = useState(false);

    const openReply = () =>{
        setIsDiplay(true)
    }

    const closeReply = () =>{
        setIsDiplay(false)
    }
    
    return(
        <div key={comment.id} onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'single-comment-wrapper '+hoverEffect : 'single-comment-wrapper'}>
            <div className="single-comment-header">
                <img
                    className="commentetor-image"
                    src={profile}
                    alt="Commentetor" 
                />
                <h2>{comment.comment.commentorName}</h2>
            </div>
            <div className="single-comment-content">
                <p>{comment.comment.commentorMessage}</p>
                {isDisplay ? (
                        <div>
                            <Replyinput closeReply={closeReply}/>
                        </div>
                    ):(
                        <button onClick={openReply}>
                            <FontAwesomeIcon icon={faComment} style={{ marginRight: '14px' }} /> Reply
                        </button>
                    )}
            </div>
        </div>
    )
}

export default withHover(Singlecomment);