import React, { useContext } from "react";
import SearchResultContext from "../utils/bookSearchResultContext";

const { bookSearchResult } = useContext(SearchResultContext);
//const { handleBtnSearchResultClick } = useContext(SearchResultContext)

function CardTitle(){
    return <h2>{bookSearchResult.title}</h2>
};

function CardImg() {
    return (
      <SearchResultContext.Consumer>
        {({bookSearchResult}) => (
          <div>
            <img className="card-img" src={bookSearchResult.image} alt="cover thumbnail" />
            {!bookSearchResult.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          </div>
        )}
      </SearchResultContext.Consumer>
    );
  };

  function CardBody() {
    return (
      <div>
        <h4>Author: {bookSearchResult.author}</h4>
      </div>
    );
  };

/*   function CardBtn(props) {
    return (
      <div>
          <button onClick={SearchResultContext} className={`card-btn ${props["data-value"]}`} {...props} />
      </div>
    );
  } */

function Card() {
  return (
    <div>
      <CardTitle/>
      <CardImg />
      <CardBody />
{/*       <CardBtn
        style={{ opacity: 1 }}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: 1 }}
        data-value="next"
      /> */}
    </div>
  );
}

export default Card;
