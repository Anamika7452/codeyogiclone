import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { MdComputer } from "react-icons/md";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(`hello`, values);
  };

  const validationSchema = object().shape({
    email: string().email(),
    password: string().min(8),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex justify-center sm:px-96 px-10 h-screen flex-col"
    >
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
        error={errors.email}
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      />
      <Input
        error={errors.password}
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
      <Button>login</Button>
    </form>
  );
};
export default LoginPage;
