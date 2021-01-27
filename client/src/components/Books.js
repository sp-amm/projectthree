import React from 'react';
import './books.css';
import SmallBookCard from './SmallBookCard';
import Loading from './Loading';

const Books = ({ books, isLoading }) => {
    
    console.log(books.items)
    const booksArr = books.items;
    return isLoading? ({ Loading }) : (<section className="cards">
        {booksArr.map(item => (
                <SmallBookCard key={item.volumeInfo.id} item={item}/>
        ))}
        </section>)   
} ;

export default Books;

