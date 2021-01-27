import React, { useState } from "react";


const SearchForm = ( { getQuery } ) => {
  
  const[string, setString] = useState('');
  const onChange = (query) => {
    setString(query)
    getQuery(query)
  }

  return (
      <section>
        <form className="form-group mt-5" >
          <input
            className="form-control"
            placeholder="Search title or ISBN"
            value={string}
            onChange={(e) => onChange(e.target.value)}
          />
        <button className="btn btn-success mt-3 mb-5" type="submit">
         Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
