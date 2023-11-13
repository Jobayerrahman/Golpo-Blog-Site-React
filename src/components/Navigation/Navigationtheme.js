import '../../assets/css/style.css';
import React, { useContext }  from 'react';
import ThemeContext from '../Library/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';

function Navigationtheme() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    if(theme === 'light'){
        return (
            <div className='navigation-theme'>
                <FontAwesomeIcon onClick={switchTheme} className='navigation-icon' icon={faMoon} />
            </div>
        );
    }else{
        return (
            <div className='navigation-theme'>
                <FontAwesomeIcon onClick={switchTheme} className='navigation-icon' icon={faSun} />
            </div>
        );
    }
}

export default Navigationtheme;