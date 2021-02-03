import React from 'react';

const Header = ({ children }) => {
return(
    <div
      style={{ height: 280, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    ><h1>Kick Counter App</h1>
    </div>
)
};

export default Header;