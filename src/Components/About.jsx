import React from "react";
import MainPageCompo from "./MainPageCompo";

const About = () => {
  const data = {
    name: "Suraj",
  };
  return (
    <>
      <MainPageCompo myData={data} />
    </>
  );
};

export default About;
