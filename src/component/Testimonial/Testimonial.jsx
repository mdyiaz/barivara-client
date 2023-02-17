import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
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
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          // automatically
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          //
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
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className=""></div>
          {categorys.map((category) => (
            <SwiperSlide>
              <div className="bg-primary mt-8 testimonial text-white p-4 mb-10 rounded-lg">
                <div className="">
                  <img
                    className="w-[100px] h-[100px] rounded-full"
                    src="https://images.unsplash.com/photo-1611548224889-08f2aa1a88f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBib3l8ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                </div>
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
