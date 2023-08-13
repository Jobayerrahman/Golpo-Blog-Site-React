import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Blogcarousel({children}) {
    const options ={
        loop: true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
        }
    }
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
                {children}
            </OwlCarousel>
        </div>
    );
}

export default Blogcarousel;