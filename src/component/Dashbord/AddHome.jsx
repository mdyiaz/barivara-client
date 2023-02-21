import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const AddHome = () => {
  // fetch the category

  const { data: categorys = [] } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await fetch("category.json");
      const data = await res.json();
      return data;
    },
  });

  console.log(categorys);

  //
  const [gas, setGas] = useState(false);
  const [watter, setWatter] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [Internet, setInternet] = useState(false);

  const addHomeHandler = (event) => {
    event.preventDefault();
    const from = event.target;
    const title = from.title.value;
    const price = from.price.value;
    const location = from.location.value;
    const number = from.number.value;
    const category = from.category.value;
    const bedRoom = from.bed.value;
    const bathRoom = from.bath.value;
    const sit = from.sit.value;
    const duration = from.duration.value;
    const description = from.description.value;

    const allInfo = {
      title,
      price,
      location,
      number,
      category,
      bedRoom,
      bathRoom,
      description,
      gas,
      watter,
      electricity,
      Internet,
      duration,
      sit,
    };
    console.log(allInfo);
  };
  return (
    <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Add Your Home
        </h1>
        <form onSubmit={addHomeHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                Home Title
              </label>
              <input
                type="text"
                placeholder="Enter Your Home Title"
                name="title"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>

            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter Home Price"
                name="price"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter Your Location"
              name="location"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Number"
              name="number"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Photo (height: 400 , width:500)
              </label>
              <input
                type="file"
                placeholder="Enter Your Password"
                name="photo"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Select Cetagory
              </label>
              <select
                name="category"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value="Homer">Home</option>
                <option value="helo">helo</option>
                <option value="masud">masud</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Bed Room
              </label>
              <select
                name="bed"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Bath Room
              </label>
              <select
                name="bath"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Duration (Optional)
              </label>
              <select
                name="duration"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value="">Nane</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Sit (Optional)
              </label>
              <select
                name="sit"
                className="select w-full max-w-xs  select-bordered"
              >
                <option value="">Nane</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>

          {/* include service */}

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Gas
              </label>
              <input
                onChange={(event) => setGas(event.target.checked)}
                name="gas"
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Watter
              </label>
              <input
                onChange={(event) => setWatter(event.target.checked)}
                name="watter"
                type="checkbox"
                className="checkbox"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Electricity
              </label>
              <input
                onChange={(event) => setElectricity(event.target.checked)}
                name="electricity"
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Internet
              </label>
              <input
                onChange={(event) => setInternet(event.target.checked)}
                name="internet"
                type="checkbox"
                className="checkbox"
              />
            </div>
          </div>

          {/*  */}

          <div className=" rounded-lg flex flex-col gap-2 mb-4 mt-3 ">
            <label htmlFor="email" className="text-xl font-medium">
              description
            </label>
            <textarea
              type="text"
              placeholder="Enter Your Home description  "
              name="description"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Add Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHome;

// make Masud Rana
