import React from "react";

const Table = (props) => {
  return (
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
        <td>{props.spouse}</td>
        <td>{props.location}</td>
      </tr>
  );
};

export default Table;
