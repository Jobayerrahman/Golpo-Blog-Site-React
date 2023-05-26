import natureimage from "../assets/images/mocha.webp";
import histiryimage from "../assets/images/history.jpg"
import entertainment from "../assets/images/entertainment.png"
export default function Catagories(){
    return(
        <div className="catagory-wrapper">
            <div className="catagory-card card-focus">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={histiryimage}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-common">History</span>
                </div>
            </div>
            <div className="catagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={technology}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-common">Technology</span>
                </div>
            </div>
            <div className="catagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={health}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-common">Health</span>
                </div>
            </div>
            <div className="catagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={natureimage}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-common">Nature</span>
                </div>
            </div>
            <div className="catagory-card end-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={entertainment}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-common">Entertainment</span>
                </div>
            </div>
        </div>
    )
}