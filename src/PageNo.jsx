import React from "react";

const PageNo = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-blue-500 rounded-md w-8 h-8 border-black border text-black text-xl font-semibold "
      >
        {props.children}
      </button>
    </div>
  );
};

export default PageNo;
