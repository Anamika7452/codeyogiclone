import React from "react";

const Button = (props) => {
  return (
    <button className="justify-center border px-5 py-2 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center px-4">
      {props.children}
    </button>
  );
};
export default Button;
