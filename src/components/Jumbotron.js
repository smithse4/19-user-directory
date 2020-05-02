import React from "react";
import "./Jumbotron.css";


const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="jumbo">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">
          Sort the user directory below by clicking on the column header. Search
          the directory by name.
        </p>
      </div>
    </div>

  );
};

export default Jumbotron;
