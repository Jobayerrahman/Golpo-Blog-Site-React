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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return(
        <div className="cetagory-wrapper">
            <div className="cetagory-card card-focus">
                <CategorySlider photo={natureimage} category="Nature"/>
            </div>
            <div className="cetagory-card">
                <CategorySlider photo={histiryimage} category="History"/>
            </div>
            <div className="cetagory-card">
                <CategorySlider photo={technology} category="Technology"/>
            </div>
            <div className="cetagory-card">
                <CategorySlider photo={health} category="Health"/>
            </div>
            <div className="cetagory-card end-card">
                <CategorySlider photo={entertainment} category="Entertainment"/>
            </div>
        </div>
    )
}