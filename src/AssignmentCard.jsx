import React, { useEffect } from "react";
import H3 from "./H3";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import SubmissionInput from "./SubmissionInput";
import { string } from "yup";
import { useFormik } from "formik";
import { submitAssignment } from "./Api";

const AssignmentCard = (props) => {
  const [showPopup, updatePopoup] = useState(false);

  const Showpopup = () => {
    updatePopoup(true);
  };

  const Hidepopup = () => {
    updatePopoup(false);
  };

  const onSubmit = (values) => {
    submitAssignment(values.submissionLink, props.assignment.id);
    Hidepopup();
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      submissionLink: "",
    },
    onSubmit,
  });

  const assignmentUplodedDateString = props.assignment.updated_at;
  const asignmentUplodedDateObject = DateTime.fromISO(
    assignmentUplodedDateString
  );
  const assignmentUplodedDateHumanReadableForm =
    asignmentUplodedDateObject.toFormat("ccc LLL dd y");

  const assignmentDueDateString = props.assignment.due_date;
  const assignmentDueDateObject = DateTime.fromISO(assignmentDueDateString);
  const assignmentDueDateHumanReadableForm =
    assignmentDueDateObject.toFormat("ccc LLL dd y");

  let navigate = useNavigate();

  return (
    <div>
      <div>
        <Card>
          <div
            onClick={() =>
              navigate(`/assignments/${props.assignment.id}/details`)
            }
          >
            <div className="flex space-x-5">
              <div className="flex space-x-2">
                <h1 className="text-sm font-medium text-black">
                  #{props.assignment.id}
                </h1>
                <div className="sm:flex sm:space-x-5">
                  <h1 className="text-sm font-medium text-black">
                    {props.assignment.title}
                  </h1>
                  <H3>({assignmentUplodedDateHumanReadableForm})</H3>
                </div>
              </div>
            </div>
            <h1 className="text-sm text-red-500">
              Due Date : {assignmentDueDateHumanReadableForm}
            </h1>
            <div>
              <h1 className="text-red-500 text-sm font-bold mt-5">
                Not Submitted
              </h1>
            </div>
          </div>
          <button onClick={Showpopup} className="mt-5 space-x-2 flex mx-auto">
            <div className="text-lg text-green-500 ">
              <TiTickOutline></TiTickOutline>
            </div>
            <h1 className="text-green-500 text-sm font-semibold text-center ">
              Submit
            </h1>
          </button>
        </Card>
        <div>
          {showPopup && (
            <form
              onSubmit={handleSubmit}
              className="h-screen absolute flex -translation-x-1/2 -translation-y-1/2 top-1/2 left-1/2"
            >
              <div className="absolute p-5 w-96 rounded-md bg-gray-200 space-y-4">
                <hr className="bt-2" />
                <div className="flex space-x-7">
                  <H3> Submission Link</H3>
                  <SubmissionInput
                    value={values.submissionLink}
                    name="submissionLink"
                    onChange={handleChange}
                    className="p-2 rounded-md border border-indigo-500"
                    type="text"
                  />
                </div>
                <hr className="bt-2" />
                <div className="space-x-4">
                  <Button>Submit</Button>
                  <Button onClick={Hidepopup}>Cancel</Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default AssignmentCard;
