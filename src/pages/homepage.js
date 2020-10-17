import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainContent from "../components/MainContent/MainContent";


const homepage = () => {
  return (
    <div className="home-page">
      <Navbar active={"home"} />
      <MainContent/>
      
    </div>
  );
};

export default homepage;
