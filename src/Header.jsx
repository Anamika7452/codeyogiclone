import React from "react";
import MyLink from "./MyLink";
import { BiTimeFive, BiLogOut } from "react-icons/bi";

const Header = (props) => {
  return (
    <>
      <div className=" p-5 flex sm:flex-row space-y-5 sm:space-y-0 flex-col justify-between bg-gray-800 sm:px-20 sm:py-5">
        <div className="flex">
          <MyLink to="/lectures">
            CodeYogi
            <span className="border m-2" />
          </MyLink>
          <span className="text-white">Welcome, Anamika</span>
        </div>
        <div className="space-x-4">
          <div className="sm:px-3 inline-block sm:py-3 px-1 py-2 bg-blue-600 text-white">
            <div className="flex ">
              <BiTimeFive />
              <p className="ml-1">00:00</p>
            </div>
          </div>
          <div className="sm:px-3 inline-block sm:py-3 px-1 py-2 bg-blue-600 text-white">
            <div className="flex ">
              <BiLogOut />
              <p className="ml-1">LogOut</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
