import React from 'react';

const SellerRequest = () => {
    return (
        <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Request For Seller Account
        </h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                required
                name="first_name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>

            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Last name
              </label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                required
                name="last_name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="location" className="text-xl font-medium">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter Your Location"
              required
              name="location"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            
          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="phone_Number" className="text-xl font-medium">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              required
              name="phone_Number"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div>
          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Upload Your Photo 
              </label>
              <input
                type="file"
                placeholder=""
                required
                name="photo"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>

          </div>

          

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                NID Card Photo 
              </label>
              <input
                type="file"
                placeholder="Enter Your Password"
                required
                name="nid_photo"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              NID Number
            </label>
            <input
              type="number"
              placeholder="Enter Your NID Number"
              required
              name="nid_Number"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          </div>

          

        
          <div className=" rounded-lg flex flex-col gap-2 mb-4 mt-3 ">
            <label htmlFor="email" className="text-xl font-medium">
              Write Something About You_
            </label>
            <textarea
              type="text"
              placeholder="Enter Your description  "
              name="location"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default SellerRequest;