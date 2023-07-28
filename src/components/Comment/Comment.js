import Commentform from "./Commentform";
import SingleCommentComponent from "./SingleCommentComponent";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/comment.css';

export default function Comment(){
    return(
        <div className="comment-wrapper">
            <div className="comment-header">
                <h2>Leave you comment here</h2>
            </div>
            <Row>
                <Col><Commentform/></Col>
                <Col>
                    <div className="comment-section">
                        <SingleCommentComponent/>
                        <SingleCommentComponent/>
                        <SingleCommentComponent/>
                        <SingleCommentComponent/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}