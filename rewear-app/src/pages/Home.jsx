import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/Works";
import FeaturedItems from "../components/FeatureItems";
import ItemCategories from "../components/ItemCategories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ItemCategories/>
      <FeaturedItems />
    </div>
  );
};

export default Home;
