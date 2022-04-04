import React from "react";
import { GoThreeBars } from "react-icons/go";

const Hemburger = (props) => {
  return (
    <>
      <div className="p-5 text-4xl text-gray-700 sm:hidden block">
        <GoThreeBars onClick={props.onClick} />
      </div>
    </>
  );
};
export default Hemburger;
