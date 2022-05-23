import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { getMyInfo } from "./Api";

const ProfilePage = () => {
  const [information, setInformation] = useState("");
  useEffect(() => {
    const myInformation = getMyInfo();
    myInformation.then((myInfo) => {
      setInformation(myInfo);
      console.log(myInfo);
    });
  }, []);

  return <>{information && <Profile myInfo={information}></Profile>}</>;
};
export default ProfilePage;
