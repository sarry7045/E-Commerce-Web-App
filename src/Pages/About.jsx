import React from "react";
import BannerPage from "../Components/BannerPage";

const About = () => {
  const data = {
    name: "Suraj",
  };
  return (
    <>
      <BannerPage myData={data} />
    </>
  );
};

export default About;
