import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/style.css';
function Navigationtheme({switchTheme,mode}) {
    return (
        <div className='navigation-theme'>
            <FontAwesomeIcon 
            onClick={switchTheme} 
            className='navigation-icon' 
            icon={mode} />
        </div>
    );
}

export default Navigationtheme;