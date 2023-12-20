import React from 'react';
import Bookcard from './Bookcard';

function BookList() {
    return (
        <div className='bookList-wrapper'>
            <Bookcard/>
            <Bookcard/>
            <Bookcard/>
            <Bookcard/>
        </div>
    );
}

export default BookList;