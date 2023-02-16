import React from "react";
import HomeCard from "../../component/HomeCard/HomeCard";
import OurCategory from "../../component/OurCategory/OurCategory";
import Slider from "../../component/Slider/Slider";
import Testimonial from "../../component/Testimonial/Testimonial";

function Home() {
  return (
    <div>
      <Slider></Slider>
      <OurCategory></OurCategory>
      <HomeCard></HomeCard>

      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
