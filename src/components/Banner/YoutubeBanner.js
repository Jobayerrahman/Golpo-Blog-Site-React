import React from 'react';
import ReactPlayer from 'react-player'

function YoutubeBanner(props) {
    return (
        <div className='youtubeBanner-wrapper'>
            <div className='youtubeBanner-content'>
                <h2>Follow us on <span>Youtube</span> for Visual content</h2>
                <a>Subscribe Us</a>
            </div>
            <div className='youtubeBanner-Video'>
                <ReactPlayer url='https://www.youtube.com/watch?v=K4TOrB7at0Y' />
            </div>
        </div>
    );
}

export default YoutubeBanner;