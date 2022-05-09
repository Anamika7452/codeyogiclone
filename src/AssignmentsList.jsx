import React from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";
import { getAssignments } from "./Api";

const AssignmentsList = (props) => {
  const cachedAssignments =
    JSON.parse(localStorage.getItem("assignments")) || [];
  const [assignments, setAssignments] = useState(cachedAssignments);

  useEffect(() => {
    const assignmentData = getAssignments();
    assignmentData.then((assignments) => {
      setAssignments(assignments);
    });
  }, []);

  return (
    <>
      <div className="mt-20 sm:mt-0">
        <H1>Assignments List</H1>
      </div>
      <SecondaryCard>
        <div className="sm:px-16 mx-5 py-5 space-y-7">
          {assignments.map((assignment) => (
            <AssignmentCard
              assignment={assignment}
              key={assignment.id}
            ></AssignmentCard>
          ))}
        </div>
      </SecondaryCard>
    </>
  );
};
export default AssignmentsList;
