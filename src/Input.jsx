import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        className=" w-96 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        placeholder={props.placeholder}
      />
      <div className="h-4">
        {props.error && <span className="text-red-500">*{props.error}*</span>}
      </div>
    </div>
  );
};
export default Input;
