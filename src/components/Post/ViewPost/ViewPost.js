import React from 'react';
import Category from '../../Category/Category';
import { Link } from "react-router-dom";
import bannerimage from "../../../assets/images/mocha.webp";
import '../../../assets/css/post.css';

function ViewPost() {
    const category               = "Default";
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
                <Link className="postblog-heading"><h2>Twitter vs. Threads: Meta Has the Advantage</h2></Link>
                <div className="postblog-info">
                    <h4>Blog Owner - Devid Warner</h4>
                    <Category category={category}/> <p> {category} - 22 May 2023 12:00pm</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut porttitor leo vel nulla posuere accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut porttitor leo vel nulla posuere accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut porttitor leo vel nulla posuere accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut porttitor leo vel nulla posuere accumsan.</p>
            </div>
        </div>
    );
}

export default ViewPost;