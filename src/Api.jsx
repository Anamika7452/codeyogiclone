import axios from "axios";

export const getStudents = () => {
  const studentsResponsePromise = axios.get(
    `https://randomuser.me/api?results=9`
  );
  const studentsPromise = studentsResponsePromise.then((response) => {
    const students = response.data.results;
    localStorage.setItem("students", JSON.stringify(students));
    return students;
  });
  return studentsPromise;
};

export const getLectures = () => {
  const lecturesResponsePromise = axios.get(
    `https://api.codeyogi.io/batches/1/sessions`,
    {
      withCredentials: true,
    }
  );
  const lecturesPromise = lecturesResponsePromise.then((response) => {
    const lectures = response.data;
    localStorage.setItem("lectures", JSON.stringify(lectures));
    return lectures;
  });
  return lecturesPromise;
};

export const getAssignments = () => {
  const assignmentsResponsePromise = axios.get(
    `https://api.codeyogi.io/batches/1/assignments`,
    {
      withCredentials: true,
    }
  );
  const assignmentsPromise = assignmentsResponsePromise.then((response) => {
    const assignments = response.data;
    localStorage.setItem("assignments", JSON.stringify(assignments));
    return assignments;
  });
  return assignmentsPromise;
};
