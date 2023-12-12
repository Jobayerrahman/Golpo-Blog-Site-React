import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";

import company01 from "../../assets/images/company/company--01.png"
import company02 from "../../assets/images/company/company--02.png"
import company03 from "../../assets/images/company/company--03.png"
import company04 from "../../assets/images/company/company--04.png"
import company05 from "../../assets/images/company/company--05.png"
import company06 from "../../assets/images/company/company--06.png"
import company07 from "../../assets/images/company/company--07.png"
import company08 from "../../assets/images/company/company--08.png"

function Partner(props) {
    const settings = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1225,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
    return (
        <div className='partner-wrapper'>
            <Container>
            <Slider {...settings}>
                <div>
                  <img className='partner-image' src={company01} />
                </div>
                <div>
                  <img className='partner-image' src={company02} />
                </div>
                <div>
                  <img className='partner-image' src={company03} />
                </div>
                <div>
                  <img className='partner-image' src={company04} />
                </div>
                <div>
                  <img className='partner-image' src={company05} />
                </div>
                <div>
                  <img className='partner-image' src={company06} />
                </div>
                <div>
                  <img className='partner-image' src={company07} />
                </div>
                <div>
                  <img className='partner-image' src={company08} />
                </div>
                </Slider>
            </Container>
        </div>
    );
}

export default Partner;