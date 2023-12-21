import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';

export default function Navigationsearch(){
    const blogURL                               = "https://jsonserverdatagolpo.onrender.com/blogs"; 
    const [blogs, setBlogs]                     = useState([]);
    const [isLoading, setIsLoading]             = useState(true);
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');

    useEffect(() => getBlog(), []);
    
    const getBlog = () => {
        axios.get(blogURL).then((response) => {
            const blogs = response.data;
            const status = response.status;
            if(status !== 200 ){
                setIsLoading(true);
            }
            setBlogs(blogs);
        });
    }


    const handleLangSearch = () => {
        setOpen(!open);
    }

    const handleFocus = () =>{
        setIsLoading(false);
    }

    // const handleBlur = () =>{
    //     setIsLoading(true);
    // }

    const fillterBlog = blogs.filter(blog =>{
        return blog.title.toLowerCase().includes(query.toLowerCase());
    }) 
    
    return(
        <div className="navigation-search">
            <FontAwesomeIcon onClick={handleLangSearch} className='navigation-icon' icon={faMagnifyingGlass} />
            {open?( 
                <div className="search-wrapper">
                    <Form>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 navigation-search"
                        aria-label="Search"
                        value={query}
                        onFocus={handleFocus}
                        onChange={e => setQuery(e.target.value)}
                        />
                    </Form>

                    <div className="search-tag">
                        <h4>Popular tag</h4>
                        <div className="searchTag-title">
                            <span>#history</span>
                            <span>#nature</span>
                            <span>#sport</span>
                            <span>#blog</span>
                        </div>
                    </div>

                    <div className="searchItems-wrapper">
                        {isLoading ? (
                            <div className="search-loader">
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#35a7a7', '#0c1de5e8', '#e52954', '#687783', '#1d734b']}
                                />
                            </div>
                        ):(
                            <div className="search-items">
                                {fillterBlog.map(blog => (
                                    <div className="searchItem-wrapper">
                                        <Link className="blog-title" to={`/blog/${blog.slug}`}><h2>{blog.title}</h2></Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            ):null}
        </div>
    )
}