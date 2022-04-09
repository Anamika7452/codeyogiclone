import React from "react";
import H1 from "./H1";
import Card from "./Card";
import { BiLink } from "react-icons/bi";
import MyLink from "./MyLink";
import Button from "./Button";

const NotFoundPage = (props) => {
  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center ">
        <Card>
          <div className="text-5xl mb-5 p-2 font-bold">
            Something Went Wrong
          </div>
          <div className="text-4xl flex justify-center mt-7">
            <BiLink />
          </div>
          <div className="text-center space-y-8 p-8">
            <H1>404 error</H1>
            <Button>
              <MyLink to="/lectures">Go back to Lectures</MyLink>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};
export default NotFoundPage;
