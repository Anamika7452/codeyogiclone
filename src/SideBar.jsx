import React from "react";
import { SiAirplayvideo } from "react-icons/si";
import {
  MdOutlineAssignmentLate,
  MdOutlineQuiz,
  MdPeopleOutline,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  let navigate = useNavigate();
  return (
    <div className={props.onClick}>
      <div className=" bg-gray-800 space-y-4 w-80 p-5 sm:py-2 sm:w-60 flex flex-col justify-between  h-screen sticky top-0 ">
        <div className="sm:hidden block text-3xl text-white absolute top-0 left-72 sm:left-40">
          <AiOutlineCloseCircle onClick={props.onChange} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white ">CODEYOGI</h1>
          <div onClick={() => navigate(`/lectures`)}>
            <div
              onClick={props.onChange}
              className="flex space-x-2 mt-5 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <SiAirplayvideo />
              </div>
              <div className="text-white text-sm font-bold">Lectures</div>
            </div>
          </div>
          <div onClick={() => navigate(`/assignments`)}>
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl ">
                <MdOutlineAssignmentLate />
              </div>
              <div className="text-white text-sm font-bold">Assignments</div>
            </div>
          </div>
          <div onClick={() => navigate(`/quiz`)}>
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <MdOutlineQuiz />
              </div>
              <div className="text-white text-sm font-bold">Quiz</div>
            </div>
          </div>

          <div onClick={() => navigate(`/students`)}>
            <div
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
              onClick={props.onChange}
            >
              <div className="text-white text-2xl">
                <MdPeopleOutline />
              </div>
              <div className="text-white text-sm font-bold">Students</div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => navigate(`/profile`)}>
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <CgProfile />
              </div>
              <div className="text-white text-sm font-bold">Profile</div>
            </div>
          </div>
          <div onClick={() => navigate(`/logout`)}>
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <BiLogOut />
              </div>
              <div className="text-white text-sm font-bold">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
