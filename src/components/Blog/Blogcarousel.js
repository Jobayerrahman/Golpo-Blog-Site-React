import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Blogcarousel({children}) {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                {children}
            </OwlCarousel>;
        </div>
    );
}

export default Blogcarousel;