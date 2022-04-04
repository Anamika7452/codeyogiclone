import React from "react";
import H3 from "./H3";
import MyLink from "./MyLink";
import Card from "./Card";
import { GrCloudDownload } from "react-icons/gr";

const LecutreCard = (props) => {
  return (
    <Card>
      <div className="flex space-x-5 ">
        <h1 className="text-sm font-medium">Lecture#{props.lecture.id}</h1>
        <H3>{props.lecture.UplodedDate}</H3>
      </div>
      <H3>{props.lecture.Duration}</H3>
      <ul className="text-sm font-medium list-disc mx-8 mt-8">
        {props.lecture.Topics.map((topic) => (
          <li>{topic}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <a href={props.lecture.RecordingUrl} target="_blank">
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
