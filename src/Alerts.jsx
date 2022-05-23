import React, { useContext } from "react";
import { AlertContext } from "./AlertContext";
import Alert from "./Alert";

const Alerts = () => {
  const { alerts, removeAlert } = useContext(AlertContext);

  return (
    <div className="fixed w-100 mt-10 right-0 left-0 z-10 space-y-2">
      {alerts.map((a) => (
        <Alert alert={a} key={a.id} removeAlert={removeAlert} />
      ))}
    </div>
  );
};
export default Alerts;
