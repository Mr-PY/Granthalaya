import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";

const contactus = () => {
  return (
    <>
      <Navbar active={"contact"} />
      <ContactUs />
    </>
  );
};

export default contactus;
