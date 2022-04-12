import React from "react";
import MyLink from "./MyLink";
import { SiAirplayvideo } from "react-icons/si";
import { MdOutlineAssignmentLate, MdOutlineQuiz } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = (props) => {
  return (
    <div className={props.onClick}>
      <div className=" bg-gray-800 space-y-4 w-80 p-5 sm:py-2 sm:w-60 flex flex-col justify-between  h-screen sticky top-0 ">
        <div className="sm:hidden block text-3xl text-white absolute top-0 left-72 sm:left-40">
          <AiOutlineCloseCircle onClick={props.onChange} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white ">CODEYOGI</h1>
          <MyLink to="/lectures">
            <div
              onClick={props.onChange}
              className="flex space-x-2 mt-5 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <SiAirplayvideo />
              </div>
              <div>Lectures</div>
            </div>
          </MyLink>
          <MyLink to="/assignments">
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl ">
                <MdOutlineAssignmentLate />
              </div>
              <div>Assignments</div>
            </div>
          </MyLink>
          <MyLink to="/quiz">
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <MdOutlineQuiz />
              </div>
              <div>Quiz</div>
            </div>
          </MyLink>
        </div>
        <div>
          <MyLink to="/profile">
            <div
              onClick={props.onChange}
              className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md"
            >
              <div className="text-white text-xl">
                <CgProfile />
              </div>
              <div>Profile</div>
            </div>
          </MyLink>
          <a href="https://codeyogi.io/" target="_blank">
            <div className="flex space-x-2 hover:bg-gray-900 p-2 rounded-md">
              <div className="text-white text-xl">
                <BiLogOut />
              </div>
              <div className="text-white font-bold">Logout</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
