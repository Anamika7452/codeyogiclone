import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { MdComputer } from "react-icons/md";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { AlertContext } from "./AlertContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setMessage } = useContext(AlertContext);

  const onSubmit = (value) => {
    console.log(`value is`, value);
    setMessage("Login Successful ");
  };

  const validationSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      <Form className="space-y-4 flex justify-center sm:px-96 px-10 h-screen flex-col">
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
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <Button>login</Button>
      </Form>
    </Formik>
  );
};
export default LoginPage;
