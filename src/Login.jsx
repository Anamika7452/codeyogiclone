import React, { useState } from "react";
import Alert from "./Alert";
import LoginPage from "./LoginPage";
import { AlertContext } from "./AlertContext";

const Login = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const alertData = { message: alertMessage, setMessage: setAlertMessage };

  return (
    <AlertContext.Provider value={alertData}>
      <Alert></Alert>
      <LoginPage></LoginPage>
    </AlertContext.Provider>
  );
};

export default Login;
