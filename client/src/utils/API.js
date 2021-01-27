/* import axios from "axios";

const booksAPIKey = AIzaSyBVjcKSp-FhWhHxaTz0XGk5vMNNlpH7fK8;
const searchTerms = 

export default {
    searchBooksByName: function(book) {
        return new Promise((resolve, reject) => {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms + "?key=" + booksAPIKey)
                .then( res => {
                    const bookSearchResult = res.data;
                    const results = bookSearchResult.map(bookSearchResult => {
                        return {
                            title: bookSearchResult.volumeInfo.title,
                            author: bookSearchResult.volumeInfo.authors[0],

                        };
                    });
                    resolve(results)
                    console.log(results);
                })
                .catch(err => reject(err));
        });
    }
}; */