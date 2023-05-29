import { Col, Container, Row } from "react-bootstrap";

export default function Footer(){
    return(
        <div className="footer-wrapper">
            <Container>
                <div className="footer-content">
                    <Row>
                        <Col>
                            <div className="footer-header">
                                <h2>Golpo</h2>
                                <p>Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Ut porttitor leo vel nulla posuere accumsan. 
                                    Suspendisse sed tortor eget justo aliquam euismod. 
                                    Morbi ut massa et neque iaculis lacinia a eu est
                                </p>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}