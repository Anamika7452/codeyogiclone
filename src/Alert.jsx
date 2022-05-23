import React from "react";
import classNames from "classnames";

const Alert = ({ alert, removeAlert }) => {
  let { type, message } = alert;

  const alertClasses = classNames(
    "text-white border text-2xl max-w-sm px-2 py-5 mx-auto h-20 opacity-70 font-medium  rounded-lg ",
    {
      "bg-red-500 border-red-800 ": type === "error",
      "bg-green-500 border-green-800 ": type === "success",
      "bg-yellow-500 border-yellow-800 ": type === "warning",
    }
  );
  return (
    <>
      <div className={alertClasses}>
        <span className=" mr-40">{message}</span>
        <button
          onClick={() => {
            removeAlert(alert);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};
export default Alert;
