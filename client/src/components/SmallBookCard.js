import React from 'react'

const SmallBookCard = ({ item }) => {
    return(
        <div className='card'>
            <div className='card-inner'>
                <h1>{item.volumeInfo.title}</h1>
                {/* <img src={item.volumeInfo.imageLinks} alt="cover image"/> */}
                <ul>
                    <li>Author: {item.volumeInfo.authors[0]}</li>
                    <li>Published: {item.volumeInfo.publishedDate}</li>
                    <li>Publisher: {item.volumeInfo.publisher}</li>
                </ul>
            </div>
        </div>
    )
}

export default SmallBookCard;