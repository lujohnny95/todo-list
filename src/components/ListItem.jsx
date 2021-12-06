import React, { useState } from "react";

const ListItem = (props) => {
  const [lineThrough, setLineThrough] = useState(false);

  const handleClick = () => {
    setLineThrough((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: lineThrough ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default ListItem;