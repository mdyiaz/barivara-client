import React from "react";
import HomeCard from "../../component/HomeCard/HomeCard";
import OurCategory from "../../component/OurCategory/OurCategory";
import Slider from "../../component/Slider/Slider";

function Home() {
  return (
    <div>
      <Slider></Slider>
      <OurCategory></OurCategory>
      <HomeCard></HomeCard>
    </div>
  );
}

export default Home;
