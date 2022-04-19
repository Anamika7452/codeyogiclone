import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AssignmentDetailCard from "./AssignmentDetailCard";
import { useParams } from "react-router-dom";

const AssignmentDetailList = (props) => {
  const [assignmentdetail, setAssignmentDetail] = useState([]);

  const data = useParams();

  const selectedId = +data.id;

  useEffect(() => {
    const assignmentDetailData = axios.get(
      ` https://api.codeyogi.io/assignments/${selectedId}
`,
      {
        withCredentials: true,
      }
    );
    assignmentDetailData.then((response) => {
      setAssignmentDetail(response.data);
    });
  }, []);

  return (
    <>
      <div className="bg-gray-200">
        <div className="mt-20 sm:mt-0">
          <div className="sm:px-16  sm:mx-5 mx-0 py-5 space-y-5 ">
            <AssignmentDetailCard
              selectedAssignment={assignmentdetail}
              key={assignmentdetail.id}
            ></AssignmentDetailCard>
          </div>
        </div>
      </div>
    </>
  );
};
export default AssignmentDetailList;
