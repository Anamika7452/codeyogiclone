import React from "react";

const SecondaryCard = (props) => {
  return (
    <div className="bg-gray-100 rounded-sm h-fit sm:h-full">
      {props.children}
    </div>
  );
};
export default SecondaryCard;
