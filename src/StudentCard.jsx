import React from "react";
import H1 from "./H1";
import Card from "./Card";
import { BsInstagram, BsGithub } from "react-icons/bs";

const StudentCard = ({ student }) => {
  return (
    <div>
      <div className="w-60 h-60 mt-10 mx-auto sm:mx-4 mb-32 sm:mb-20">
        <div className="border border-black rounded-md">
          <Card>
            <div className="flex justify-center">
              <img
                className="rounded-md object-cover shadow-lg border w-52 h-52"
                src={student.picture.large}
              ></img>
            </div>
            <div className="flex justify-between">
              <H1>
                {student.name.title}
                {student.name.first}
              </H1>
            </div>
            <div className="flex justify-between text-blue-500">
              <H1>{student.location.country}</H1>
            </div>
            <div className="text-2xl flex space-x-4 justify-start">
              <BsInstagram></BsInstagram>
              <BsGithub></BsGithub>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default StudentCard;
