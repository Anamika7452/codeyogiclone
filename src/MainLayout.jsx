import React from "react";
import SideBar from "./SideBar";
import H1 from "./H1";
import { Outlet } from "react-router-dom";
import Hemburger from "./Hemburger";

const MainLayout = (props) => {
  const [sideBarVisibility, updateSideBarVisibility] = React.useState(false);

  const sideBarVisible = () => {
    updateSideBarVisibility(true);
    console.log(`sidebaropened`);
  };

  const sideBarNotVisible = () => {
    updateSideBarVisibility(false);
    console.log(`sidebarclosed`);
  };
  return (
    <>
      <div className="sm:flex flex-grow">
        <div className="hidden sm:block  h-screen sticky top-0 ">
          <SideBar />
        </div>

        <div className="block sm:hidden h-screen fixed">
          {!sideBarVisibility && <Hemburger onClick={sideBarVisible} />}

          {sideBarVisibility && (
            <SideBar onChange={sideBarNotVisible} onClick={sideBarVisible} />
          )}
        </div>
        <div className="sm:flex-grow sm:p-20 px-2 py-2 bg-gray-200 space-y-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MainLayout;
