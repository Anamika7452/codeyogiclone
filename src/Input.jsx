



import { useField } from "formik";
import React from "react";

const Input = ({ type, name, id, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <input
        {...field}
        id={id}
        name={name}
        {...rest}
        type={type || "text"}
        className=" w-96 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
      />
      <div className="h-4">
        {meta.touched && meta.error && (
          <span className="text-red-500">*{meta.error}*</span>
        )}
      </div>
    </div>
  );
};
export default Input;
