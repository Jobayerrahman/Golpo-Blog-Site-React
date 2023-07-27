import React from 'react';
import '../../assets/css/preloader.css';
import { ColorRing } from 'react-loader-spinner';
import Typewriter from "typewriter-effect";
function Preloader(props) {
    return (
        <div className='preloader-wrapper'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Golpo")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Golpo")
                        .start();
                }}
            />
        </div>
    );
}

export default Preloader;