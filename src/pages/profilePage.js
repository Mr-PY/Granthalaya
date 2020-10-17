import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";

const profilePage = () => {
  return (
    <>
      <Navbar active={"profile"} />
      <Profile/>
    </>
  );
};

export default profilePage;
