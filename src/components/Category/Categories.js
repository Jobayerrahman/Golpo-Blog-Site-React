import Slider from "react-slick";
import natureimage from "../../assets/images/mocha.webp";
import histiryimage from "../../assets/images/history.jpg"
import entertainment from "../../assets/images/entertainment.png"
import technology from "../../assets/images/technology.jpg";
import health from "../../assets/images/health.jpg";
import CategorySlider from "./CategorySlider";
export default function Catagories(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return(
        <div className="cetagory-wrapper">
            <div className="cetagory-card card-focus">
                <div className="slider-item-wrapper">
                    <div className="catagory-poster">
                        <img
                        className="catagory-image"
                        src={histiryimage}
                        alt="Updating Blog" 
                        />
                    </div>
                    <div className="catagory-content">
                        <span className="catagory catagory-History">History</span>
                    </div>
                </div>
            </div>
            <div className="cetagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={technology}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Technology">Technology</span>
                </div>
            </div>
            <div className="cetagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={health}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Health">Health</span>
                </div>
            </div>
            <div className="cetagory-card">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={natureimage}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Nature">Nature</span>
                </div>
            </div>
            <div className="cetagory-card end-card">
                <div className="slider-item-wrapper">
                    <div className="catagory-poster">
                        <img
                        className="catagory-image"
                        src={entertainment}
                        alt="Updating Blog" 
                        />
                    </div>
                    <div className="catagory-content">
                        <span className="catagory catagory-Entertainment">Entertainment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}