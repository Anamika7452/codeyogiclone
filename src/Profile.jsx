import React from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import Input from "./Input";
import H3 from "./H3";
import Button from "./Button";
import { useFormik } from "formik";
import { DateTime } from "luxon";

const Profile = ({ myInfo }) => {
  console.log(
    "FirstName",
    myInfo.data.first_name,
    " LastName",
    myInfo.data.last_name,
    " EmailAddress",
    myInfo.data.email,
    " InstituteName",
    myInfo.data.institute.name,
    " YearOfPassout",
    myInfo.data.year_of_pass_out,
    " PhoneNumber",
    myInfo.data.phone_no,
    "  DOB",
    myInfo.data.date_of_birth,
    " Device",
    myInfo.data.work_device,
    " InstituteRollNo",
    myInfo.data.institute_roll_no,
    " Branch",
    myInfo.data.branch
  );
  const DOBString = myInfo.data.date_of_birth;
  const DOBObject = DateTime.fromISO(DOBString);
  const DOBHumanReadableForm = DOBObject.toFormat("dd-MM-y");

  const onSubmit = (values) => {};
  const initialValues = {
    FirstName: myInfo.data.first_name,
    LastName: myInfo.data.last_name,
    EmailAddress: myInfo.data.email,
    InstituteName: myInfo.data.institute.name,
    YearOfPassout: myInfo.data.year_of_pass_out || "",
    PhoneNumber: myInfo.data.phone_no,
    DOB: DOBHumanReadableForm,
    Device: myInfo.data.work_device,
    InstituteRollNo: myInfo.data.institute_roll_no || "",
    Branch: myInfo.data.branch,
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-20 sm:mt-0">
        <SecondaryCard>
          <div className="p-5">
            <H1>Personal details</H1>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>First Name</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input
                  value={values.FirstName}
                  name="FirstName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Last Name</H3>
                <span className="text-red-500 text-sm">
                  (Skip only if you don't have it in official documents)
                </span>
              </div>
              <div>
                <Input
                  value={values.LastName}
                  name="LastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Email address</H3>
              </div>
              <div>
                <Input
                  value={values.EmailAddress}
                  name="EmailAddress"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Institute Name</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input
                  value={values.InstituteName}
                  name="InstituteName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Year Of Passout</H3>
              </div>
              <div>
                <Input
                  value={values.YearOfPassout}
                  name="YearOfPassout"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Phone Number</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input
                  value={values.PhoneNumber}
                  name="PhoneNumber"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Date Of Birth</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input value={values.DOB} name="DOB" onChange={handleChange} />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Device you are using to do your assignments </H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input
                  value={values.Device}
                  name="Device"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Institute roll no.</H3>
              </div>
              <div>
                <Input
                  value={values.InstituteRollNo}
                  name="InstituteRollNo"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Branch</H3>
              </div>
              <div>
                <Input
                  value={values.Branch}
                  name="Branch"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <Button>Update</Button>
          </div>
        </SecondaryCard>
      </form>
    </>
  );
};
export default Profile;
