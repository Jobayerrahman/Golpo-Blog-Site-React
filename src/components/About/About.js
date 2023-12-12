import React from 'react';

function About(props) {
    return (
        <div className='about-wrapper'>
            <div className='about-introduction'>
                <h4>About Golpo</h4>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan.</h2>
                <a>Discover more</a>
            </div>
            <div className='about-content'>
                <div className='about-content-scetion about-mission'>
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor leo vel nulla posuere accumsan. 
                    Suspendisse sed tortor eget justo aliquam euismod.</p> 
                </div>
                <div className='about-content-scetion about-vision'>
                    <h2>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor leo vel nulla posuere accumsan. 
                    Suspendisse sed tortor eget justo aliquam euismod.</p> 
                </div>
                <div className='about-content-scetion about-story'>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor leo vel nulla posuere accumsan. 
                    Suspendisse sed tortor eget justo aliquam euismod.</p> 
                </div>
                <div className='about-content-scetion about-work'>
                    <h2>Our Work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor leo vel nulla posuere accumsan. 
                    Suspendisse sed tortor eget justo aliquam euismod.</p> 
                </div>
            </div>
        </div>
    );
}

export default About;