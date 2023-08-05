import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTop(props) {
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setScrollToTop(true);
            }else{
                setScrollToTop(false)
            }
        })
    },[])
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className='scrollToTop-wrapper'>
            { scrollToTop && (
                // <Button style={{
                //     position: "fixed",
                //     bottom: "50px",
                //     right: "50px",
                //     height: "50px",
                //     width: "50px",
                //     fontSize: "50px",
                // }} 
                // onClick={scrollUp}
                // >^</Button>
                <FontAwesomeIcon className='scrollToTop-icon' onClick={scrollUp} icon={faAngleUp} />
            )}
        </div>
    );
}

export default ScrollToTop;