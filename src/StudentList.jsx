import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const userData = axios.get("https://randomuser.me/api?results=80");
    userData.then((response) => {
      setStudents(response.data.results);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-semibold ">Students List</h1>
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
