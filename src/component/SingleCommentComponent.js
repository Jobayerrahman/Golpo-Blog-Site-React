import bannerimage from "../assets/images/mocha.webp";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export default function Singlecomment(){
    return(
        <div className="single-comment-wrapper">
            <div className="single-comment-header">
                <img
                    className="commentetor-image"
                    src={bannerimage}
                    alt="Commentetor" 
                />
                <h2>Jhon smith</h2>
            </div>
            <div className="single-comment-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor leo vel nulla posuere accumsan. Suspendisse 
                    sed tortor eget justo aliquam euismod. Morbi ut massa et neque 
                    iaculis lacinia a eu est. Etiam nec enim id mi maximus consequat sed 
                    ut tortor. Nullam velit ipsum, ornare id leo a, cursus mollis nunc. 
                    Etiam dignissim nulla vel ante mollis, lobortis aliquam lectus egestas. 
                    Vivamus sit amet libero sit amet lorem dignissim varius. </p>
            
                    <Button variant="secondary" type="submit" style={{ width: '120px' }}>
                        <FontAwesomeIcon icon={faComment} style={{ marginRight: '20px' }} />
                        Reply
                    </Button>
            </div>
        </div>
    )
}