import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Blogcarousel({children}) {
    const options ={
        loop: true,
        nav:true,
        margin:0,
        center: true,
        responsive:{
            360:{
                items:1
            },
            390:{
                items:1
            },
            768:{
                items:2
            },
            844:{
                items:2
            },
            900:{
                items:2
            },
            1024:{
                items:3
            },
            1225:{
                items:3
            },
            1440:{
                items:3,
                margin:10
            },
            1600:{
                items:5
            },
            2560:{
                items:6
            }
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