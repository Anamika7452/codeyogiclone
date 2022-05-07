import React from "react";
import H3 from "./H3";
import MDEditor from "@uiw/react-md-editor";
import Card from "./Card";
import { GrCloudDownload } from "react-icons/gr";
import { DateTime } from "luxon";

const LecutreCard = (props) => {
  const lectureDateString = props.lecture.created_at;
  const lectureDateObject = DateTime.fromISO(lectureDateString);
  const lectureDateHumanReadableForm =
    lectureDateObject.toFormat("ccc LLL dd y");
  const start_time = new Date(props.lecture.start_time);
  const end_time = new Date(props.lecture.end_time);
  const diff = end_time - start_time;
  const timeInHumanReadableFormString = new Date(diff).toISOString();
  const timeInHumanReadableForm = timeInHumanReadableFormString.substring(
    11,
    19
  );
  return (
    <Card>
      <div className="flex space-x-5 ">
        <h1 className="text-sm font-medium">Lecture#{props.lecture.id}</h1>
        <H3>({lectureDateHumanReadableForm})</H3>
      </div>
      <div>
        <H3>Duration : {timeInHumanReadableForm}</H3>
      </div>

      <div className="text-sm font-medium mx-8 mt-8">
        <MDEditor.Markdown
          className="!bg-white markdown !text-black"
          source={props.lecture.topic}
        />
      </div>
      <div className="flex justify-center">
        <a href={props.lecture.recording_url} target="_blank">
          <div className="inline-block text-lg">
            <GrCloudDownload />
          </div>
          <div className="inline-block mx-2">
            <H3>Watch/Download Recording</H3>
          </div>
        </a>
      </div>
    </Card>
  );
};
export default LecutreCard;
