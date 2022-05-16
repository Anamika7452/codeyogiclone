import React from "react";
import H1 from "./H1";
import { useEffect, useState } from "react";
import LectureCard from "./LectureCard";
import SecondaryCard from "./SecondaryCard";
import { getLectures, getCachedData } from "./Api";

const LecturesList = (props) => {
  const cachedLectures = getCachedData("lectures") || [];
  const [lectures, setLectures] = useState(cachedLectures);

  useEffect(() => {
    const lectureData = getLectures();
    lectureData.then((lectures) => {
      setLectures(lectures);
    });
  }, []);

  return (
    <>
      <div className="mt-20 sm:mt-0">
        <H1>Lectures List</H1>
      </div>
      <SecondaryCard>
        <div className="sm:px-16 mx-5 py-5 space-y-5">
          {lectures.map((lecture) => (
            <LectureCard lecture={lecture} key={lecture.id}></LectureCard>
          ))}
        </div>
      </SecondaryCard>
    </>
  );
};
export default LecturesList;
