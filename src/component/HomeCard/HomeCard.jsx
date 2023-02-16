import React from "react";

const HomeCard = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-primary text-center font-semibold">
        Rooms & Apartments
      </h2>

      <div className="grid grid-cols-3">
        <div className=" rounded-lg relative homeCard">
          <img
            className="w-full rounded-lg"
            src="https://toohotel.com/wp-content/uploads/2022/09/TOO_Hotel_Suite_Bathroom_Panoramique.jpg"
            alt=""
          />

          <div className="homeCardDtls absolute w-full  bg-primary text-white p-2">
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
