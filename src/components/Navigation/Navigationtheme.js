import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/style.css';
import ThemeContext from '../Library/ThemeContext';
function Navigationtheme({switchTheme,mode}) {
    return (
        <div className='navigation-theme'>
            <ThemeContext.Consumer>
                {({mode, switchTheme}) => <FontAwesomeIcon 
            onClick={switchTheme} 
            className='navigation-icon' 
            icon={mode} />}
            </ThemeContext.Consumer>
        </div>
    );
}

export default Navigationtheme;