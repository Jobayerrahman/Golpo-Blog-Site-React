import {Container} from "react-bootstrap";
import '../../assets/css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faTwitterSquare, faYoutubeSquare, faFacebookSquare, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer-wrapper">
            <Container>
                <div className="footer-content">
                    <div className="footer-header">
                        <h2>Golpo</h2>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. 
                            Ut porttitor leo vel nulla posuere accumsan. 
                            Suspendisse sed tortor eget justo aliquam euismod. 
                            Morbi ut massa et neque iaculis lacinia a eu est
                        </p>
                    </div>

                    <div className="footer-navbar">
                        <h2>Menu</h2>
                        <ul>
                            <li><NavLink  to="/" className='footer-navigation-link'>Home</NavLink></li>
                            <li><NavLink  to="/About" className='footer-navigation-link'>About</NavLink></li>
                            <li><NavLink  to="/Contact" className='footer-navigation-link'>Contact</NavLink></li>
                            <li><NavLink  to="/Contact" className='footer-navigation-link'>Career</NavLink></li>
                            <li><NavLink  to="/" className='footer-navigation-link'>Terms & Conditions</NavLink></li>
                        </ul>
                    </div>

                    <div className="footer-catagory">
                        <h2>Catagory</h2>
                        <ul>
                            <li><NavLink  to="/Nature" className='footer-navigation-link'>Nature</NavLink></li>
                            <li><NavLink  to="/Technology" className='footer-navigation-link'>Technology</NavLink></li>
                            <li><NavLink  to="/History" className='footer-navigation-link'>History</NavLink></li>
                            <li><NavLink  to="/Entertainment" className='footer-navigation-link'>Entertainment</NavLink></li>
                            <li><NavLink  to="/Health" className='footer-navigation-link'>Health</NavLink></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Get the latest updates, join our newsletter</h4>
                        <div className="newsletter">
                            <input className="newsletter-input" placeholder="Enter Your Email"/>
                            <button className="newsletter-button">SUBSCRIBE</button>
                        </div>
                        <div className="icon-wrapper" style={{ justifyContent: 'space-evenly', marginTop: '10px', width: '200px'}}>
                            <FontAwesomeIcon className="icon icon-footer" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="icon icon-footer" icon={faYoutubeSquare} />
                            <FontAwesomeIcon className="icon icon-footer" icon={faTwitterSquare} />
                            <FontAwesomeIcon className="icon icon-footer" icon={faGoogleDrive} />
                        </div>
                        <div style={{ justifyContent: 'space-evenly', marginTop: '5px', color: '#ddd', fontSize: '16px'}}>
                            <span>golpo2023@copyright</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}