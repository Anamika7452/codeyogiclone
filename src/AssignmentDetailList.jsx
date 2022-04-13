import React from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import AssignmentDetailCard from "./AssignmentDetailCard";
import assignmentData from "./MockData/assignments";
import { useParams } from "react-router-dom";

const AssignmentDetailList = (props) => {
  const data = useParams();

  const selectedId = +data.id;

  const selectedAssignment = assignmentData.find(
    (assignment) => assignment.id === selectedId
  );

  return (
    <>
      <div className="bg-gray-200">
        <div className="mt-20 sm:mt-0">
          <div className="sm:px-16  sm:mx-5 mx-0 py-5 space-y-5 ">
            <AssignmentDetailCard
              selectedAssignment={selectedAssignment}
            ></AssignmentDetailCard>
          </div>
        </div>
      </div>
    </>
  );
};
export default AssignmentDetailList;
