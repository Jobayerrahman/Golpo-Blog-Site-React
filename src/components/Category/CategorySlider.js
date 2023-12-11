import React from 'react';
import Slider from "react-slick";

function CategorySlider({photo,category}) {
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
                    <span className={`catagory catagory-${category}`}>{category}</span>
                    <div className='catagory-context'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                    </div>
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
                    <span className={`catagory catagory-${category}`}>{category}</span>
                    <div className='catagory-context'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                    </div>
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
                    <span className={`catagory catagory-${category}`}>{category}</span>
                    <div className='catagory-context'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                    </div>
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
                    <span className={`catagory catagory-${category}`}>{category}</span>
                    <div className='catagory-context'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                    </div>
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
                    <span className={`catagory catagory-${category}`}>{category}</span> 
                    <div className='catagory-context'>
                        <h2>Cyclone Mocha intensifies into 'extremely severe cyclonic storm': IMD.</h2>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default CategorySlider;