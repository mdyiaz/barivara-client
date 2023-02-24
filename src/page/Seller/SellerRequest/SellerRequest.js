import React, { useState } from "react";

const SellerRequest = () => {
  const [seller_Photo, setSellerPhoto] = useState("");
  const [nid_Photo, setnidPhoto] = useState("");
  const requestHandler = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const location = from.location.value;
    const phone = from.phone.value;
    const nid = from.nid.value;
    const about = from.about.value;
    const sellerPhoto = from.sellerPhoto.files[0];
    const nidPhoto = from.nidPhoto.files[0];
    // console.log(nidPhoto);
    // console.log(sellerPhoto);
    const formData1 = new FormData();
    formData1.append("image", sellerPhoto);

    const url =
      "https://api.imgbb.com/1/upload?key=fd31eb1b7eccf01a95d0b1949fe0e46a";
    fetch(url, {
      method: "POST",
      body: formData1,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const photo = imageData.data.url;
        //  upload photo 2
        // console.log(photo);
        setSellerPhoto(photo);
      });

    //
    const formData2 = new FormData();
    formData2.append("image", nidPhoto);

    fetch(url, {
      method: "POST",
      body: formData2,
    })
      .then((res) => res.json())
      .then((imageData2) => {
        const photo = imageData2.data.url;
        //  upload photo 2
        // console.log(photo);
        setnidPhoto(photo);
      });

    //

    const sellerInfo = {
      name,
      location,
      phone,
      nid,
      about,
      seller_Photo,
      nid_Photo,
    };
    console.log(sellerInfo);

    // image uploade imagebb
  };

  // const imageUpload = (sellerPhoto) => {
  //   const formData = new FormData();
  //   formData.append("image", sellerPhoto);

  //   const url =
  //     "https://api.imgbb.com/1/upload?key=fd31eb1b7eccf01a95d0b1949fe0e46a";
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imageData) => {
  //       const photo = imageData.data.url;
  //       //  upload photo 2
  //       // console.log(photo);
  //     });
  // };
  return (
    <div className="px-4">
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto  p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="  mb-4 text-3xl text-primary font-semibold">
          Request For Seller Account
        </h1>
        <form onSubmit={requestHandler}>
          <div className="grid grid-cols-1 md:grid-cols-1 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                Full Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter Your Full Name"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>
          </div>

          <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="location" className="text-xl font-medium">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter Your Location"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="phone_Number" className="text-xl font-medium">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Enter Your Phone Number"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>

            <div>
              <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
                <label htmlFor="photo" className="text-xl font-medium">
                  Upload Your Photo
                </label>
                <input
                  type="file"
                  name="sellerPhoto"
                  placeholder=""
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="nid_photo" className="text-xl font-medium">
                NID Card Photo
              </label>
              <input
                type="file"
                name="nidPhoto"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            </div>
            <div className=" form-control rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="nid_number" className="text-xl font-medium">
                NID Number
              </label>
              <input
                type="number"
                name="nid"
                placeholder="Enter Your NID Number"
                className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div className=" form-control rounded-lg flex flex-col gap-2 mb-4 mt-3 ">
            <label htmlFor="about" className="text-xl font-medium">
              Write Something About You_
            </label>
            <textarea
              type="text"
              name="about"
              placeholder="Enter Your description  "
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button
              className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerRequest;
