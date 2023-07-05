import {Container} from "react-bootstrap";

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
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Career</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="footer-catagory">
                        <h2>Catagory</h2>
                        <ul>
                            <li>Nature</li>
                            <li>Technology</li>
                            <li>History</li>
                            <li>Entertainment</li>
                            <li>Health</li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Get the latest updates, join our newsletter</h4>
                        <div className="newsletter">
                            <input className="newsletter-input" placeholder="Enter Your Email"/>
                            <button className="newsletter-button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}