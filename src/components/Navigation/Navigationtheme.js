import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';

function Navigationtheme(props) {
    const [mood, setMood] = useState(faMoon)

    const handleTheme = () =>{
        if(mood === faMoon){
            setMood(faSun);
        }else{
            setMood(faMoon);
        }
    }
    return (
        <div className='navigation-theme'>
            <FontAwesomeIcon 
            onClick={handleTheme} 
            className='navigation-icon' 
            icon={mood} />
        </div>
    );
}

export default Navigationtheme;