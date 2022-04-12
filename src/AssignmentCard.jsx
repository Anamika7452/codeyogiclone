import React from "react";
import H3 from "./H3";
import MyLink from "./MyLink";
import Card from "./Card";
import { TiTickOutline } from "react-icons/ti";

const AssignmentCard = (props) => {
  return (
    <div>
      <div>
        <MyLink to={`/assignments/${props.assignment.id}/details`}>
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
            <div>
              <h1 className="text-red-500 text-sm font-bold mt-5">
                Not Submitted
              </h1>
              <div className="mt-5 space-x-2 flex justify-center">
                <div className="text-lg text-green-500 ">
                  <TiTickOutline></TiTickOutline>
                </div>
                <h1 className="text-green-500 text-sm text-center ">Submit</h1>
              </div>
            </div>
          </Card>
        </MyLink>
      </div>
    </div>
  );
};
export default AssignmentCard;
