import axios from "axios";

const API_BASE_URL = "https://api.codeyogi.io/";

const cachedData = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const handleError = (e) => {
  console.error(`error is`, e);
  return [];
};

export const getStudents = async (page) => {
  try {
    const studentsResponsePromise = await axios.get(
      `https://randomuser.me/api?results=9&page=${page}`
    );
    const students = studentsResponsePromise.data.results;
    cachedData(students, "students");
    return students;
  } catch (e) {
    handleError(e);
  }
};

export const getMyInfo = async () => {
  const myInfoResponsePromise = await axios.get(API_BASE_URL + `me`, {
    withCredentials: true,
  });
  const myInfo = myInfoResponsePromise.data;
  // cachedData(myInfo, "myInfo");
  return myInfo;
};

export const getLectures = async () => {
  try {
    const lecturesResponsePromise = await axios.get(
      API_BASE_URL + `batches/1/sessions`,
      {
        withCredentials: true,
      }
    );
    const lectures = lecturesResponsePromise.data;
    cachedData(lectures, "lectures");
    return lectures;
  } catch (e) {
    handleError(e);
  }
};

export const getAssignments = async () => {
  try {
    const assignmentsResponsePromise = await axios.get(
      API_BASE_URL + `batches/1/assignments`,
      {
        withCredentials: true,
      }
    );
    const assignments = assignmentsResponsePromise.data;
    cachedData(assignments, "assignments");
    return assignments;
  } catch (e) {
    handleError(e);
  }
};

export const getAssignmentDetail = async (selectedId) => {
  try {
    const assignmentDetailResponsePromise = await axios.get(
      API_BASE_URL +
        `assignments/${selectedId}
`,
      {
        withCredentials: true,
      }
    );
    const assignmentDetail = assignmentDetailResponsePromise.data;
    cachedData(assignmentDetail, "assignmentDetail");
    return assignmentDetail;
  } catch (e) {
    handleError(e);
  }
};

export const submitAssignment = (submissionLink) => {
  const urlValidator = string().url("url is not valid");
  try {
    urlValidator.validateSync(submissionLink);
    setSubmissionLinkError("");
  } catch (e) {
    setSubmissionLinkError(e.message);
    return;
  }
  axios.put(
    `https://api.codeyogi.io/assignment/${props.assignment.id}/submit `,
    { submissionLink },
    { withCredentials: true }
  );
};
