import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategories = () => {
  const basas = useLoaderData();
  console.log(basas);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 mt-10">
        {basas.map((basa) => (
          <div className=" rounded-lg relative homeCard">
            <img className="w-full rounded-lg" src={basa?.photo} alt="" />

            <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
              <h2 className="text-xl">{basa?.title}</h2>
              <div className="flex justify-between">
                <p>Price: {basa?.price}</p>
                <p>Location: {basa?.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategories;
