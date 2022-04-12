import React from "react";
import H1 from "./H1";
import LectureCard from "./LectureCard";
import SecondaryCard from "./SecondaryCard";
import lecutreData from "./MockData/lectures";

const LecturesList = (props) => {
  return (
    <>
      <div className="mt-20">
        <H1>Lectures List</H1>
      </div>
      <SecondaryCard>
        <div className="sm:px-16 mx-5 py-5 space-y-5">
          {lecutreData.map((lecture) => (
            <LectureCard lecture={lecture}></LectureCard>
          ))}
        </div>
      </SecondaryCard>
    </>
  );
};
export default LecturesList;
