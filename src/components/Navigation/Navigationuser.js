import '../../assets/css/user.css';
import React, { useState } from "react";
import LoginModal from "../User/Login/LoginModal";
import RegisterModal from "../User/Register/RegisterModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleUser, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Navigationuser(){
    const [open, setOpen] = useState(false);
    const [ openLoginModal, setOpenLoginModal ] = useState(false);
    const [ openRegisterModal, setOpenRegisterModal ] = useState(false);

    const sessionStatus     = sessionStorage.getItem('session');
    const sessionUserName   = sessionStorage.getItem('username');

    const handleOpenLoginModal = (e) =>{
        setOpenLoginModal(true);
        setOpenRegisterModal(false);
    }

    const handleCloseLoginModal = (e) =>{
        setOpenLoginModal(false);
    }

    const handleOpenRegisterModal = (e) =>{
        setOpenRegisterModal(true);
        setOpenLoginModal(false);
    }

    const handleCloseRegisterModal = (e) =>{
        setOpenRegisterModal(false);
    }

    const handleLangDropdown = () => {
        setOpen(!open);
    }

    const handleLogout = () =>{
        sessionStorage.clear();
        window.location.reload();
    }

    return(
        <div className="navigation-userdropdown">
            {sessionStatus? (<div className="profiledropdown-item" onClick={handleLangDropdown}>
                    <img className="profileImage"
                        src="https://cdn.muzz.com/website-v4/img/shared/flags/bd.svg"
                        alt="Profile Pic" /> 
                        <h4>{sessionUserName}</h4>
                    </div>) : (<FontAwesomeIcon className='navigation-icon' icon={faUser} onClick={handleOpenLoginModal} />) }
            {open?(
                <div className="userdropdown-wrapper">
                    <ul className="userdropdown-menu">
                        <li className="userdropdown-item">
                            <FontAwesomeIcon className='navigation-usericon' icon={faCircleUser} />
                            My Profile
                        </li>
                        <li className="userdropdown-item" onClick={handleLogout}>
                            <FontAwesomeIcon className='navigation-usericon' icon={faArrowRightToBracket} />
                            Log out
                        </li>
                    </ul>
                </div>
            ):null}   

            <LoginModal 
                onShowModal = {openLoginModal} 
                onCloseModal = {handleCloseLoginModal}  
                handleOpenRegisterModal = {handleOpenRegisterModal}
            />

            <RegisterModal 
                onShowModal={openRegisterModal} 
                onCloseModal={handleCloseRegisterModal} 
                handleOpenLoginModal = {handleOpenLoginModal}
            />
        </div>
    )
}