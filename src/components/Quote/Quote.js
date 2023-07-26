import React from 'react';
import bannerimage from "../../assets/images/mocha.webp";
import '../../assets/css/quote.css';
function Quote({...quote}) {
    return (
        <div className='quote-wrapper'>
            <div className="quote-header">
                <img
                    className="quote-image"
                    src={bannerimage}
                    alt="Commentetor" 
                />
                <h2>{quote.quote.author}</h2>
            </div>
            <div className="quote-content">
                <p>{quote.quote.quote}</p>
            </div>       
        </div>
    );
}

export default Quote;