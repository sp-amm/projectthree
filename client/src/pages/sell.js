import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import Books from '../components/Books'
import axios from 'axios';



const Sell = () => {
    
  /*   const BOOKS_API_KEY=process.env.REACT_APP_BOOKS_API_KEY */
    const BOOKS_API_KEY = "AIzaSyBVjcKSp-FhWhHxaTz0XGk5vMNNlpH7fK8"; 

    const [books, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}` + BOOKS_API_KEY)

            console.log(result.data)
            setItems(result.data);
            setIsLoading(false);
        }
        fetchBooks();
    }, [query])

    return (
        <div className='container'>
            <SearchForm getQuery={(query) => setQuery(query)}/>
            <Books isLoading={isLoading} books={books} />
        </div>
    )

}

export default Sell;