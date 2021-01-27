import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} style={{width:'200px',margin:'auto', display:'block'}} alt="Loading" />
  </div>
);

export default Loading;
