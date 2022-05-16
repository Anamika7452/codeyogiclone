import React from "react";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import PageNo from "./PageNo";
import { getStudents, getCachedData } from "./Api";

const StudentList = () => {
  const [page, setPage] = useState([]);
  const cachedStudents = getCachedData("students") || [];
  const [students, setStudents] = useState(cachedStudents);

  useEffect(() => {
    const studentsData = getStudents(page);
    studentsData.then((student) => {
      setStudents(student);
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
          <StudentCard student={s} key={s.cell} />
        ))}
      </div>
    </div>
  );
};
export default StudentList;
