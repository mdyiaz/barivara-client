import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await fetch("category.json");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className=" container mx-auto mt-10">
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className=""></div>
          {categorys.map((category) => (
            <SwiperSlide>
              <div className="bg-primary text-white p-4 mb-10">
                <h2 className="text-2xl font-semibold">Md Masud Rana</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat molestiae asperiores culpa assumenda recusandae,
                  aliquam ex unde quae nesciunt vero adipisci! Similique fugiat,
                  totam placeat distinctio laborum veniam eum sit.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
