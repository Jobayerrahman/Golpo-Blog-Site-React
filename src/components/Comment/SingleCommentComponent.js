import withHover from "../Hoc/withHover";
import bannerimage from "../../assets/images/mocha.webp";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useEffect, useState } from "react";

const Singlecomment=({hoverEffect,onHover,onWithoutHover,isHover,commentId,commentator,comment})=>{
    return(
        <div key={commentId}>
            <div onMouseEnter={onHover} onMouseLeave={onWithoutHover} className={isHover ? 'single-comment-wrapper '+hoverEffect : 'single-comment-wrapper'}>
                <div className="single-comment-header">
                    <img
                        className="commentetor-image"
                        src={bannerimage}
                        alt="Commentetor" 
                    />
                    <h2>{commentator}</h2>
                </div>
                <div className="single-comment-content">
                    <p>{comment}</p>
                
                        <Button variant="secondary" type="submit" style={{ width: '120px' }}>
                            <FontAwesomeIcon icon={faComment} style={{ marginRight: '20px' }} />
                            Reply
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default withHover(Singlecomment);