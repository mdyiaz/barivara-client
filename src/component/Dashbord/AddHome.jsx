import React, { useState } from "react";

const AddHome = () => {
  const [Gas, setGas] = useState(false);
  console.log(Gas);
  return (
    <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Add Your Home
        </h1>
        <form>
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
                name="last_name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Location
            </label>
            <input
              type="email"
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
              name="phoneNumber"
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
                name="password"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Select Cetagory
              </label>
              <select className="select w-full max-w-xs  select-bordered">
                <option value="Homer">Homer</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Bed Room
              </label>
              <select className="select w-full max-w-xs  select-bordered">
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
              <select className="select w-full max-w-xs  select-bordered">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
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
                onChange={() => setGas(true)}
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Watter
              </label>
              <input
                onChange={() => setGas(true)}
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
                onChange={() => setGas(true)}
                type="checkbox"
                className="checkbox"
              />
            </div>
            <div className=" rounded-lg flex items-center gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Internet
              </label>
              <input
                onChange={() => setGas(true)}
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
              name="location"
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
