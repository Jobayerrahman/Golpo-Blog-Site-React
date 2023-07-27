import React from 'react';
import Quote from '../components/Quote/Quote';
import { useEffect, useState } from "react";
import axios from "axios";
import Preloader from '../components/Preloader/Preloader';

function Quotespage(props) {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);
    const quoteURL = "https://dummyjson.com/quotes";

    useEffect(() => getQuote(), []);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1500)
    })

    const getQuote = () => {
        axios.get(quoteURL).then((response) => {
        const quotes = response.data.quotes;
        setQuotes(quotes);
        });
    }
    
    return (
        <>
            {
                isLoading ? (<Preloader/>) :(
                    <div className='allQuote-wrapper'>
                        {quotes.map((quote) => (
                            <Quote quote={quote}/>
                        ))}
                    </div>
                )
            }
        </>
    );
}

export default Quotespage;