import React from 'react';
import Slider from "react-slick";

function CategorySlider({photo}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
            <div className="slider-item-wrapper">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={photo}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Entertainment">Entertainment</span>
                </div>
            </div>
            <div className="slider-item-wrapper">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={photo}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Entertainment">Entertainment</span>
                </div>
            </div>
            <div className="slider-item-wrapper">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={photo}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Entertainment">Entertainment</span>
                </div>
            </div>
            <div className="slider-item-wrapper">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={photo}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Entertainment">Entertainment</span>
                </div>
            </div>
            <div className="slider-item-wrapper">
                <div className="catagory-poster">
                    <img
                    className="catagory-image"
                    src={photo}
                    alt="Updating Blog" 
                    />
                </div>
                <div className="catagory-content">
                    <span className="catagory catagory-Entertainment">Entertainment</span>
                </div>
            </div>
        </Slider>
    );
}

export default CategorySlider;