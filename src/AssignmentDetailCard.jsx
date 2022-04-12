import React from "react";
import H3 from "./H3";
import Card from "./Card";
import Button from "./Button";
import assignmentData from "./MockData/assignments";

const AssignmentDetailCard = (props) => {
  return (
    <div className="p-4">
      <Card>
        <div className="space-y-5">
          <h1 className="text-xl font-medium">Assignment details</h1>
          <div className="flex sm:flex-row flex-col justify-between text-sm ">
            <H3>Title</H3>
            <h1 className="ml-10 sm:ml-0">{props.selectedAssignment.Title}</h1>
          </div>
          <hr className="bt-2" />
          <div className="flex justify-between text-sm ">
            <H3>DueDate</H3>
            <h1>{props.selectedAssignment.DueDate}</h1>
          </div>
          <hr className="bt-2" />
          <div className="flex justify-between space-x-16 text-sm ">
            <H3>Description</H3>
            <h1> {props.selectedAssignment.Description}</h1>
          </div>
          <hr className="bt-2" />
          <Button>Submit</Button>
        </div>
      </Card>
    </div>
  );
};
export default AssignmentDetailCard;
