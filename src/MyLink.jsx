import React from "react";
import { Link } from "react-router-dom";

const MyLink = (props) => {
  return (
    <>
      <div>
        <Link to={props.to} className="text-white font-bold">
          {props.children}
        </Link>
      </div>
    </>
  );
};
export default MyLink;
