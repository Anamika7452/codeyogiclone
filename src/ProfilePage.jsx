import React, { useEffect, useState } from "react";
// import MainLayout from "./MainLayout";
// import H1 from "./H1";
// import SecondaryCard from "./SecondaryCard";
// import Input from "./Input";
// import H3 from "./H3";
import Profile from "./Profile";
import { getMyInfo } from "./Api";

const ProfilePage = () => {
  const [information, setInformation] = useState("");
  useEffect(() => {
    const myInfo = getMyInfo();
    myInfo.then((myInfo) => {
      setInformation(myInfo);
    });
  }, []);

  return <>{information && <Profile myInfo={information}></Profile>}</>;
};
export default ProfilePage;
