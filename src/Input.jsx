import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className="border-2 py-2 w-40 sm:w-96 rounded-lg px-4"
    />
  );
};
export default Input;
