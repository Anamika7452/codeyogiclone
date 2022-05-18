import React, { useContext } from "react";
import { AlertContext } from "./AlertContext";

const Alert = () => {
  const alert = useContext(AlertContext);
  return (
    <>
      {alert.message && (
        <div className="bg-green-500 h-36 items-center w-96 opacity-70 rounded-lg h-screen mt-16 absolute justify-between flex -right-1/4 -translation-y-1/2  left-1/4">
          <div className="text-white text-2xl font-medium p-5">
            {alert.message}
          </div>
          <button
            onClick={() => {
              alert.setMessage("");
            }}
            className="text-white text-2xl font-medium p-5"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};
export default Alert;
