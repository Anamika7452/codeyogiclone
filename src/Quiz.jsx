import React from "react";
import Header from "./Header";

const Quiz = (props) => {
  return (
    <>
      <Header />
      <div className=" flex justify-center items-center text-2xl h-screen font-medium ">
        <h1>No Active Question</h1>
      </div>
    </>
  );
};
export default Quiz;
