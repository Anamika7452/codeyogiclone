import React, { useState } from "react";
import Alerts from "./Alerts";
import LoginPage from "./LoginPage";
import { AlertContext } from "./AlertContext";
import { uniqueId } from "lodash";
import Profile from "./Profile";

const Login = () => {
  const [alerts, setAlerts] = useState([]);

  const removeAlert = (alert) => {
    setAlerts((latestAlerts) => {
      return latestAlerts.filter((a) => a.id !== alert.id);
    });
  };

  const showAlert = (message, type = "success", dismiss = 4) => {
    const id = uniqueId();
    const alert = { message, type, id };
    setAlerts([...alerts, alert]);

    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };

  const alertData = { alerts, showAlert, removeAlert };

  return (
    <AlertContext.Provider value={alertData}>
      <Alerts></Alerts>
      <LoginPage></LoginPage>
      <Profile></Profile>
    </AlertContext.Provider>
  );
};

export default Login;
