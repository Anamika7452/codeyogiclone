import React from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import AssignmentCard from "./AssignmentCard";
import assignmentData from "./MockData/assignments";

const AssignmentsList = (props) => {
  return (
    <>
      <div className="mt-20 sm:mt-0">
        <H1>Assignments List</H1>
      </div>
      <SecondaryCard>
        <div className="sm:px-16 mx-5 py-5 space-y-7">
          {assignmentData.map((assignment) => (
            <AssignmentCard assignment={assignment}></AssignmentCard>
          ))}
        </div>
      </SecondaryCard>
    </>
  );
};
export default AssignmentsList;
