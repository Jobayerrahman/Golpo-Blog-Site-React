import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/css/style.css';
import ThemeContext from '../Library/ThemeContext';
import { useContext } from 'react';
function Navigationtheme() {
    const context = useContext(ThemeContext);
    const { mode, switchTheme } = context;
    return (
        <div className='navigation-theme'>
            {/* <ThemeContext.Consumer>
                {({mode, switchTheme}) =>  */}
            <FontAwesomeIcon 
            onClick={switchTheme} 
            className='navigation-icon' 
            icon={mode} />
            {/* }
            </ThemeContext.Consumer> */}
        </div>
    );
}

export default Navigationtheme;