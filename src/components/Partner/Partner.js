import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";

function Partner(props) {
    const settings = {
        className: "center",
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
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
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                </Slider>
            </Container>
        </div>
    );
}

export default Partner;