import React from "react";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { getStudents } from "./Api";

const StudentList = () => {
  const cachedStudents = JSON.parse(localStorage.getItem("students")) || [];
  const [students, setStudents] = useState(cachedStudents);

  useEffect(() => {
    const studentsData = getStudents();
    studentsData.then((student) => {
      setStudents(student);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-3xl sm:text-5xl text-center font-semibold mt-5">
          Students List
        </h1>
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
