import React from "react";
import BannerPage from "../Components/BannerPage";
import OurFeatures from "../Components/OurFeatures";
import TrustedBy from "../Components/TrustedBy";
import ProductListingHome from "../Components/ProductListingHome";

const Home = () => {
  const data = {
    name: null,
  };
  return (
    <>
      <BannerPage myData={data} />
      <ProductListingHome />
      <OurFeatures />
      <div style={{ marginTop: "5rem" }}>
        <TrustedBy />
      </div>
    </>
  );
};

export default Home;
