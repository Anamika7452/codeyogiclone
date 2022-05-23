import React, { useContext } from "react";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import Input from "./Input";
import H3 from "./H3";
import Button from "./Button";
import { Formik, Form } from "formik";
import { DateTime } from "luxon";
import { AlertContext } from "./AlertContext";

const Profile = ({ myInfo }) => {
  const { showAlert } = useContext(AlertContext);
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

  const onSubmit = (value) => {
    // console.log(`value is`, value);
    // showAlert("Updated sucessfully");
    // console.log(showAlert);
  };

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
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        className="mt-20 sm:mt-0"
      >
        <Form>
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
                    name="FirstName"
                    id="FirstName"
                    placeholder="FirstName"
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
                  <Input name="LastName" id="LastName" placeholder="LastName" />
                </div>
              </div>
              <hr className="m-2 border" />
              <div className="flex justify-between">
                <div className="flex">
                  <H3>Email address</H3>
                </div>
                <div>
                  <Input
                    name="EmailAddress"
                    id="EmailAddress"
                    placeholder="EmailAddress"
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
                    name="InstituteName"
                    id="InstituteName"
                    placeholder="InstituteName"
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
                    name="YearOfPassout"
                    id="YearOfPassout"
                    placeholder="YearOfPassout"
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
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="PhoneNumber"
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
                  <Input name="DOB" id="DOB" placeholder="DOB" />
                </div>
              </div>
              <hr className="m-2 border" />
              <div className="flex justify-between">
                <div className="flex">
                  <H3>Device you are using to do your assignments </H3>
                  <span className="text-red-500 text-lg">*</span>
                </div>
                <div>
                  <Input name="Device" id="Device" placeholder="Device" />
                </div>
              </div>
              <hr className="m-2 border" />
              <div className="flex justify-between">
                <div className="flex">
                  <H3>Institute roll no.</H3>
                </div>
                <div>
                  <Input
                    name="InstituteRollNo"
                    id="InstituteRollNo"
                    placeholder="InstituteRollNo"
                  />
                </div>
              </div>
              <hr className="m-2 border" />
              <div className="flex justify-between">
                <div className="flex">
                  <H3>Branch</H3>
                </div>
                <div>
                  <Input name="Branch" id="Branch" placeholder="Branch" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <Button>Update</Button>
            </div>
          </SecondaryCard>
        </Form>
      </Formik>
    </>
  );
};
export default Profile;
