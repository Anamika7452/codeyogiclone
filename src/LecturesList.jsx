import React from "react";
import H1 from "./H1";
import LectureCard from "./LectureCard";
import SecondaryCard from "./SecondaryCard";
import Card from "./Card";
import lecutreData from "./MockData/lectures";

console.log(`lectureData`, lecutreData[0]);

const LecturesList = (props) => {
  return (
    <>
      <H1>Lectures List</H1>

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
