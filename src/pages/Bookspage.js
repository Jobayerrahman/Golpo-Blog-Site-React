import React from 'react';
import '../assets/css/book.css';
import { Container } from "react-bootstrap";
import BookList from '../components/Book/BookList';

function Bookspage(props) {
    return (
        <div className='bookPage-wrapper'>
            <Container>
                <BookList/>
            </Container>
        </div>
    );
}

export default Bookspage;