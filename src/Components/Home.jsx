import React from "react";
import MainPageCompo from "./MainPageCompo";
import Services from "./Services";
import Trusted from "./Trusted";
import ProductFeature from "./ProductFeature";
const Home = () => {
  const data = {
    name: null,
  };
  return (
    <>
      <MainPageCompo myData={data} />
      <ProductFeature />
      <Services />
      <div style={{ marginTop: "5rem" }}>
        <Trusted />
      </div>
    </>
  );
};

export default Home;
