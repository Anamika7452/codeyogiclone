import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg space-y-2">
      {props.children}
    </div>
  );
};
export default Card;
