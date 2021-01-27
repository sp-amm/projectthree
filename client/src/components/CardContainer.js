import React from "react";
import Card from "./Card";
import SearchForm from "./SearchForm"

function CardContainer() {
  return (
    <div className="jumbotron card-container">
      <SearchForm />
      <Card />
    </div>
  );
}

export default CardContainer;