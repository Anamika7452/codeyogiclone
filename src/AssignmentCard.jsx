import React from "react";
import H3 from "./H3";
import MyLink from "./MyLink";
import Card from "./Card";
import { GrCloudDownload } from "react-icons/gr";
import assignmentData from "./MockData/assignments";

console.log("assignmentDatacard", assignmentData);

const AssignmentCard = (props) => {
  return (
    <div>
      <div>
        <MyLink to="/assignments/:assignmentNumber/details">
          <Card>
            <div className="flex space-x-5">
              <div className="flex space-x-2">
                <h1 className="text-sm font-medium text-black">
                  #{props.assignment.id}
                </h1>
                <div className="sm:flex sm:space-x-5">
                  <h1 className="text-sm font-medium text-black">
                    {props.assignment.Title}
                  </h1>
                  <H3>{props.assignment.UplodedDate}</H3>
                </div>
              </div>
            </div>
            <h1 className="text-sm text-red-500">
              Due Date:{props.assignment.DueDate}
            </h1>
          </Card>
        </MyLink>
      </div>
    </div>
  );
};
export default AssignmentCard;
