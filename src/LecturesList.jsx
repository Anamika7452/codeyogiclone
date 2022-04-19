import React from "react";
import H1 from "./H1";
import { useEffect, useState } from "react";
import axios from "axios";
import LectureCard from "./LectureCard";
import SecondaryCard from "./SecondaryCard";

const LecturesList = (props) => {
  const [lectures, setLectures] = useState([]);
  // const [page, setPage] = useState([]);

  useEffect(() => {
    const assignmentDetailData = axios.get(
      `https://api.codeyogi.io/batches/1/sessions`,
      {
        withCredentials: true,
      }
    );
    assignmentDetailData.then((response) => {
      console.log(`lecutredetail`, response.data);
      setLectures(response.data);
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
