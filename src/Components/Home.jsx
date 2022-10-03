import React from "react";
import MainPageCompo from "./MainPageCompo";
import Services from "./Services";
import Trusted from "./Trusted";
const Home = () => {
  const data = {
    name: null,
  };
  return (
    <>
      <MainPageCompo myData={data} />
      <Services />
      <div style={{ marginTop: "5rem" }}>
        <Trusted />
      </div>
    </>
  );
};

export default Home;
