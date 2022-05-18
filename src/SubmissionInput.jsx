import React from "react";

const Input = ({ error, type, value, ...rest }) => {
  return (
    <div>
      <input
        {...rest}
        type={type || "text"}
        className=" w-96 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      />
      <div className="h-4">
        {error && <span className="text-red-500">*{error}*</span>}
      </div>
    </div>
  );
};
export default Input;
