import React from 'react';
import '../../../assets/css/post.css';
import { Link } from "react-router-dom";
import Category from '../../Category/Category';
import bannerimage from "../../../assets/images/mocha.webp";

function ViewPost({post}) {
    const category  = "Default";
    return (
        <div className='postblog-wrapper'>
            <div className="postblog-poster">
                <img 
                    className="postblog-image"
                    src={bannerimage}
                    alt="Updating Blog" 
                />
            </div>
            <div className="postblog-content">
                <Link className="postblog-heading"><h2>{post.topicTitle}</h2></Link>
                <div className="postblog-info">
                    <h4>Blog Owner - {post.fullName}</h4>
                    <Category category={category}/> <p> {category} - 22 May 2023 12:00pm</p>
                </div>
                <p>{post.textarea}</p>
            </div>
        </div>
    );
}

export default ViewPost;