import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchTermContext from "../utils/searchTermContext";
import SearchResultContext from "../utils/bookSearchResultContext";
import CardContainer from "../components/CardContainer";
//import Row from "../components/Row";


function SearchResultGallery() {
  const [searchTerms, setSearchTerms] = useState([]);
  //const [searchTerms, searchTermsIndex] =useState(0);

  const [bookSearchResults, setbookSearchResults] = useState([]);
  const [bookSearchResult, setbookSearchResult] = useState({});
  const [bookSearchResultIndex, setbookSearchResultIndex] = useState(0);

  useEffect(() => {
    API.searchBooksByName().then(searchTerms => {
        bookSearchResults(searchTerms);
        bookSearchResult(searchTerms[0]);

      loadbookSearchResult(searchTerms[0]);
    });
  }, []);

  function nextbookSearchResult(bookSearchResultIndex) {
    // Ensure that the user index stays within our range of users
    if (bookSearchResultIndex >= bookSearchResults.length) {
        bookSearchResultIndex = 0;
    }
    setbookSearchResults(bookSearchResults[bookSearchResultIndex]);
    setbookSearchResultIndex(bookSearchResultIndex);
  }

  function previousbookSearchResults(bookSearchResultIndex) {
    // Ensure that the user index stays within our range of users
    if (bookSearchResultIndex < 0) {
        bookSearchResultIndex = bookSearchResults.length - 1;
    }
    setbookSearchResults(bookSearchResults[bookSearchResultIndex]);
    setbookSearchResultIndex(bookSearchResultIndex);
  }

  //function declared in the card component - cardbtn - 
/*   function handleBtnSearchResultClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newbookSearchResultIndex = bookSearchResultIndex + 1;
      nextbookSearchResult(newbookSearchResultIndex);
    } else {
      const newbookSearchResultIndex = bookSearchResultIndex - 1;
      previousbookSearchResult(newbookSearchResultIndex);
    }
  } */

  const loadbookSearchResults = searchTerms => {
    API.searchBooksByName(searchTerms)
      .then(bookSearchResults => {
        setUsers(bookSearchResults);
        setUser(bookSearchResults[0]);
      })
      .catch(err => console.log(err));
  };




  return (
    <SearchResultContext.Provider value={{ bookSearchResult, bookSearchResults, handleBtnSearchResultClick }}>
      <SearchTermContext.Provider
        value={{ searchTerm, searchTerms}}
      >
        <div>
          <h1 className="text-center">Welcome to LinkedUp</h1>
          <h3 className="text-center">Click on the arrows to browse users</h3>
          <LanguageSelector />
          <Row>
            <CardContainer />
          </Row>
        </div>
      </SearchTermContext.Provider>
    </SearchResultContext.Provider>
  );
}

export default SearchResultGallery;
