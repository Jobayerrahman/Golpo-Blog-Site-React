import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe  } from '@fortawesome/free-solid-svg-icons';

export default function Navigationlang(){
    const [open, setOpen] = React.useState(false);

    const handleLangDropdown = () => {
        setOpen(!open);
    }
    return(
        <div className="navigation-langdropdown">
            <FontAwesomeIcon className='navigation-icon' icon={faGlobe} onClick={handleLangDropdown} />
            {open?(
                <div className="langdropdown-wrapper">
                    <ul className="langdropdown-menu">
                        <li className="langdropdown-item">
                        <img
                                className="langdropdown-flag"
                                src="https://cdn.muzz.com/website-v4/img/shared/flags/bd.svg"
                                alt="Updating Blog" 
                            />
                            Bangali
                        </li>
                        <li className="langdropdown-item">
                        <img
                                className="langdropdown-flag"
                                src="https://cdn.muzz.com/website-v4/img/shared/flags/ca.svg"
                                alt="Updating Blog" 
                            />
                            English (CA)
                        </li>
                        <li className="langdropdown-item">
                        <img
                                className="langdropdown-flag"
                                src="https://cdn.muzz.com/website-v4/img/shared/flags/us.svg"
                                alt="Updating Blog" 
                            />
                            English (US)
                        </li>
                        <li className="langdropdown-item">
                        <img
                                className="langdropdown-flag"
                                src="https://cdn.muzz.com/website-v4/img/shared/flags/gb.svg"
                                alt="Updating Blog" 
                            />
                            English (GB)
                        </li>
                        <li className="langdropdown-item">
                        <img
                                className="langdropdown-flag"
                                src="https://cdn.muzz.com/website-v4/img/shared/flags/in.svg"
                                alt="Updating Blog" 
                            />
                            Hindi
                        </li>
                    </ul>
                </div>
            ):null}
        </div>
    )
}