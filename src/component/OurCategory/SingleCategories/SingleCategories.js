import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCategories = () => {
  // const basas = useLoaderData();
  // console.log(basas);


  const params = useParams();
  


  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/homes/${params.category}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1 mt-10">
        {categorys.map((category) => (
          <div className=" rounded-lg relative homeCard">
            <img className="w-full rounded-lg" src={category?.photo} alt="" />

            <div className="homeCardDtls absolute w-full  text-white p-2 bg-gradient-to-r from-primary to-secondary">
              <h2 className="text-xl">{category?.title}</h2>
              <div className="flex justify-between">
                <p>Price: {category?.price}</p>
                <p>Location: {category?.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategories;
