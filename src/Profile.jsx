import React from "react";
import MainLayout from "./MainLayout";
import H1 from "./H1";
import SecondaryCard from "./SecondaryCard";
import Input from "./Input";
import H3 from "./H3";
import Button from "./Button";

const Profile = (props) => {
  return (
    <>
      <div className="mt-20 sm:mt-0">
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
                <Input />
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
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Email address</H3>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Institute Name</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Year Of Passout</H3>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Phone Number</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Date Of Birth</H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Device you are using to do your assignments </H3>
                <span className="text-red-500 text-lg">*</span>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Institute roll no.</H3>
              </div>
              <div>
                <Input />
              </div>
            </div>
            <hr className="m-2 border" />
            <div className="flex justify-between">
              <div className="flex">
                <H3>Branch</H3>
              </div>
              <div>
                <Input />
              </div>
            </div>
          </div>
          <div className="p-5">
            <Button>Update</Button>
          </div>
        </SecondaryCard>
      </div>
    </>
  );
};
export default Profile;
