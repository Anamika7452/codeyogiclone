import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import PageNo from "./PageNo";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    const userData = axios.get(
      `https://randomuser.me/api?results=9&page=${page} `
    );
    userData.then((response) => {
      setStudents(response.data.results);
    });
  }, [page]);
  return (
    <div>
      <div>
        <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-5">
          Students List
        </h1>
        <div className="flex space-x-2 justify-center mt-7">
          <span className="text-lg font-semibold "> Page number </span>
          <PageNo onClick={() => setPage(1)}>1</PageNo>
          <PageNo onClick={() => setPage(2)}>2</PageNo>
          <PageNo onClick={() => setPage(3)}>3</PageNo>
          <PageNo onClick={() => setPage(4)}>4</PageNo>
        </div>
      </div>
      <div className="sm:flex justify-center flex-wrap">
        {students.map((s) => (
          <StudentCard student={s} />
        ))}
      </div>
    </div>
  );
};
export default StudentList;
