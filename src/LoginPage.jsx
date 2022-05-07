import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { MdComputer } from "react-icons/md";
import { string } from "yup";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handelEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handelPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const attemptLogin = (event) => {
    const emailValidator = string().email("email is not valid");
    const passwordValidator = string().min(
      8,
      "password must be 8 character long"
    );
    try {
      emailValidator.validateSync(email);
      setEmailError("");
    } catch (e) {
      setEmailError(e.message);
      return;
    }
    try {
      passwordValidator.validateSync(password);
      setPasswordError("");
    } catch (e) {
      setPasswordError(e.message);
      return;
    }
  };

  return (
    <div className="space-y-4 flex justify-center sm:px-96 px-10 h-screen flex-col">
      <h1
        onClick={() => navigate(`/lectures`)}
        className="text-8xl flex justify-center font-bold "
      >
        <MdComputer></MdComputer>
      </h1>
      <h1 className="text-3xl font-bold text-center">
        Sign in to your Account
      </h1>
      <Input
        error={emailError}
        type="text"
        value={email}
        onChange={handelEmailChange}
        placeHolder="email"
      />
      <Input
        error={passwordError}
        type="password"
        value={password}
        onChange={handelPasswordChange}
        placeHolder="email"
      />
      <Button onClick={attemptLogin}>login</Button>
    </div>
  );
};
export default LoginPage;
