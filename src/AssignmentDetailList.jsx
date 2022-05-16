import React from "react";
import { useEffect, useState } from "react";
import AssignmentDetailCard from "./AssignmentDetailCard";
import { useParams } from "react-router-dom";
import { getAssignmentDetail, getCachedData } from "./Api";
const AssignmentDetailList = (props) => {
  const cachedAssignmentDetail = getCachedData("assignmentDetail") || [];

  const [assignmentdetail, setAssignmentDetail] = useState(
    cachedAssignmentDetail
  );

  const data = useParams();

  const selectedId = +data.id;

  useEffect(() => {
    const assignmentDetailData = getAssignmentDetail(selectedId);
    assignmentDetailData.then((assignmentDetail) => {
      setAssignmentDetail(assignmentDetail);
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
