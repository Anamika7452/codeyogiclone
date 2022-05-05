import React from "react";
import H3 from "./H3";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";

const AssignmentDetailCard = (props) => {
  const [showPopup, updatePopoup] = useState(false);
  const [submissionLink, setSubmissionLink] = useState("");

  const ShowPopup = () => {
    updatePopoup(true);
  };

  const Hidepopup = () => {
    updatePopoup(false);
  };

  const onInputChange = (event) => {
    setSubmissionLink(event.target.value);
  };

  const submitAssignment = () => {
    axios.put(
      `https://api.codeyogi.io/assignment/${props.selectedAssignment.id}/submit `,
      { submissionLink },
      { withCredentials: true }
    );
  };
  return (
    <div className="rounded-md border-black border">
      <Card>
        <div className="space-y-5">
          <h1 className="text-xl font-medium">Assignment details</h1>
          <div className="flex sm:flex-row flex-col justify-between text-sm ">
            <H3>Title</H3>
            <h1 className="ml-10 sm:ml-0">{props.selectedAssignment.title}</h1>
          </div>
          <hr className="bt-2" />
          <div className="flex justify-between text-sm ">
            <H3>DueDate</H3>
            <h1>{props.selectedAssignment.due_date}</h1>
          </div>
          <hr className="bt-2" />
          <div className="flex justify-between space-x-16 text-sm ">
            <H3>Description</H3>
            <MDEditor.Markdown
              className="!bg-white markdown !text-black"
              source={props.selectedAssignment.description}
            ></MDEditor.Markdown>
          </div>
          <hr className="bt-2" />
          <Button onClick={ShowPopup}>Submit</Button>
        </div>
      </Card>
      {showPopup && (
        <div className="h-screen absolute flex -translation-x-1/2 -translation-y-1/2 top-1/2 left-1/2">
          <div className="absolute p-5 w-96 rounded-md bg-gray-200 space-y-4">
            <hr className="bt-2" />
            <div className="flex space-x-7">
              <H3> Submission Link</H3>
              <input
                value={submissionLink}
                onChange={onInputChange}
                className="p-2 rounded-md border border-indigo-500"
                type="text"
              />
            </div>
            <hr className="bt-2" />
            <div className="space-x-4">
              <Button onClick={submitAssignment}>Submit</Button>

              <Button onClick={Hidepopup}>close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AssignmentDetailCard;
