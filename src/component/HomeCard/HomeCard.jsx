import React from "react";

const HomeCard = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-6xl text-primary text-center font-semibold">
        Expencive Home
      </h2>

      <p className="text-lg text-primary text-center font-semibold mt-5 mb-5">FIND YOUR HOMES, FOR YOUR AVAILABILITY</p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
        <div className=" rounded-lg relative homeCard">
          <img
            className="w-full rounded-lg"
            src="https://toohotel.com/wp-content/uploads/2022/09/TOO_Hotel_Suite_Bathroom_Panoramique.jpg"
            alt=""
          />

          <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
            <h2 className="text-xl">Titles</h2>
            <div className="flex justify-between">
              <p>Price: 878777</p>
              <p>Location: 44545454</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
