import React from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import AssignmentDetailCard from "./AssignmentDetailCard";
import assignmentData from "./MockData/assignments";
import { useParams } from "react-router-dom";

console.log(`assignmentDatanew`, assignmentData[0].id);

const AssignmentDetailList = (props) => {
  const data = useParams();
  console.log(+data.assignmentNumber);
  return (
    <>
      <SecondaryCard>
        <div className="sm:px-16 mx-5 py-5 space-y-5">
          {assignmentData.filter((assignment) => (
            <AssignmentDetailCard
              assignment={assignment}
            ></AssignmentDetailCard>
          ))}
        </div>
      </SecondaryCard>
    </>
  );
};
export default AssignmentDetailList;
