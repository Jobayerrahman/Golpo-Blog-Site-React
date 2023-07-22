import React from 'react';
import Quote from '../components/Quote/Quote';
import { useEffect, useState } from "react";
import axios from "axios";

function Quotespage(props) {
    const [quotes, setQuotes] = useState([]);
    const quoteURL = "https://dummyjson.com/quotes";

    useEffect(() => getQuote(), []);

    const getQuote = () => {
        axios.get(quoteURL).then((response) => {
        const quotes = response.data.quotes;
        setQuotes(quotes);
        });
    }
    
    return (
        <div className='allQuote-wrapper'>
            {quotes.map((quote) => (
                <Quote quote={quote}/>
            ))}
        </div>
    );
}

export default Quotespage;