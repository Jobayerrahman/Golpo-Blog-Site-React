import React from 'react';
import bookImage from '../../assets/images/book/English_Harry_Potter_4.jpg';

function Bookcard() {
    return (
        <div className='book-wrapper'>
            <div className='bookCover-wrapper'>    
                <img
                    className="bookCover-image"
                    src={bookImage}
                    alt="book cover image" 
                />
            </div>
            <div className='bookContent-wrapper'>
                <h2>English Harry Potter 4</h2>
                <h4>J.k. ROWLING</h4>
                <span>$50</span>
                <div className='bookContentButton-wrapper'>
                    <a>Read Online $20</a>
                </div>
            </div>
        </div>
    );
}

export default Bookcard;