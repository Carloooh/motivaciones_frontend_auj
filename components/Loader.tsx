import React from "react";
import "./Loader.css"; 
const Loader = () => {
  return (
    <div className="container">
      {Array.from({ length: 13 }).map((_, index) => (
        <div className="particle" key={index}></div>
      ))}
    </div>
  );
};

export default Loader;