import React from 'react';
import '../../../assets/css/post.css';
import { Link } from "react-router-dom";

function ViewPost({post}) {
    return (
        <div className='postblog-wrapper'>
            <div className="postblog-poster">
                <img 
                    className="postblog-image"
                    src={post.image}
                    alt="Updating Blog" 
                />
            </div>
            <div className="postblog-content">
                <Link className="postblog-heading" to={`/post/${post.slug}`}><h2>{post.title}</h2></Link>
                <div className="postblog-info">
                    <h4>Blog Owner - {post.fullName}</h4>
                    <p> {post.category} - {post.date} {post.time}</p>
                </div>
                <p>{post.describe}</p>
            </div>
        </div>
    );
}

export default ViewPost;