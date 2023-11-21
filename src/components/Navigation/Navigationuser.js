import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import LoginModal from "../User/Login/LoginModal";
import '../../assets/css/user.css';

export default function Navigationuser(){
    const [open, setOpen] = useState(false);
    const [session, setSession] = useState(false);
    const [ openModal, setOpenModal ] = useState(false);
    const [ closeModal, setCloseModal ] = useState(false);

    const handleOpenModal = (e) =>{
        setOpenModal(true);
    }

    const handleCloseModal = (e) =>{
        setOpenModal(false);
    }

    const handleLangDropdown = () => {
        setOpen(!open);
    }

    return(
        <div className="navigation-userdropdown">
            {session? (<div className="profiledropdown-item" onClick={handleLangDropdown}>
                    <img className="profileImage"
                        src="https://cdn.muzz.com/website-v4/img/shared/flags/bd.svg"
                        alt="Profile Pic" /> 
                        <h4>UserName</h4>
                    </div>) : (<FontAwesomeIcon className='navigation-icon' icon={faUser} onClick={handleOpenModal} />) }
            {open?(
                <div className="userdropdown-wrapper">
                    <ul className="userdropdown-menu">
                        <li className="userdropdown-item">
                            <FontAwesomeIcon className='navigation-usericon' icon={faCircleUser} />
                            My Profile
                        </li>
                        <li className="userdropdown-item">
                            <FontAwesomeIcon className='navigation-usericon' icon={faArrowRightToBracket} />
                            Log out
                        </li>
                    </ul>
                </div>
            ):null}   

            <LoginModal showModal={openModal} handleCloseModal={handleCloseModal} />
        </div>
    )
}