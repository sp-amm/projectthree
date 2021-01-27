import React from "react";

const SearchResultContext = React.createContext({
  bookSearchResult: {},
  bookSearchResults: [],
  handleBtnSearchResultClick: () => {},
});

export default SearchResultContext;