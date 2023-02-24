
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {ImPriceTags} from 'react-icons/im'
import { useForm } from 'react-hook-form';
import { BiSend } from "react-icons/bi";

const EachHomeDetails = () => {

    const details = useLoaderData();

    const {register , formState:{errors} , handleSubmit} = useForm();


    const handleForm = data => {

    }

    return (
        <div className='container mx-auto'>

        <div className="text-center bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 py-14">
            <h2 className="text-4xl font-bold text-white">{details.title}</h2>
            <h3 className="text-lg text-black font-bold">Details about this Home</h3>
      </div>



      


        <div className='grid lg:grid-cols-2 sm:grid-cols-1 shadow-xl mt-20 bg-base-100 gap-10 '>
            <div>
                 <img src={details.photo} alt=""/>

                 <div className='mt-10'>
                    <h1 className='text-4xl font-bold text-center'>{details.title}</h1>
                    <p className='mt-10 text-lg'><span className=' font-bold'>About this Home: </span>{details.description}</p>
                    <p className='mt-2 text-lg'> <span className=' font-bold'>Owner's Number:</span> {details.number}</p>
                   

                    <button className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white">
                            <span className="pr-2">
                                <ImPriceTags size="20px" />
                                </span>
                                Price: {details.price} /= 
                    </button>

                    <div className='grid grid-cols-2 mt-8'>
                        <div className='text-lg'>
                            <p className='font-bold'>Address & Area</p>
                            <p>BedRooms</p>
                            <p>BathRooms</p>
                        </div>

                        <div className='text-lg'>
                            <p className='font-bold'>{details.location}</p>
                            <p>{details.bedRoom}</p>
                            <p>{details.bathRoom}</p>
                        </div>
                    </div>


                    <div className='pt-5 text-lg'>
                        <h2 className=' font-bold'>Indoor Features</h2>
                        <p>---{details.gas}</p>
                        <p>---{details.watter}</p>
                        <p>---{details.electricity}</p>
                        <p>---{details.Internet}</p>
                    </div>
                </div>
            </div>

            <div className=''>

               <h1 className='text-center font-bold text-2xl'>Book This House</h1>

               <form onSubmit={handleSubmit(handleForm)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                             <input type="text"  className="input input-bordered w-full "  />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                             <input type="number" {...register("phone", {required: "Name is required"})} placeholder="Enter Your Name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500' role="alert"> {errors.name?.message}</p>}
 
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                             <input type="Email" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                             <input type="text" {...register("name", {required: "Name is required"})} placeholder="Enter Your Name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500' role="alert"> {errors.name?.message}</p>}
 
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                             <input type="text" {...register("name", {required: "Name is required"})} placeholder="Enter Your Name" className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-500' role="alert"> {errors.name?.message}</p>}
 
                    </div>


                    <button
                type="submit"
                className="btn bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-800 mt-5 mb-10 text-white w-full"
              >
                Request Booking
                <span className="pl-2">
                  <BiSend size="20px" />
                </span>
              </button>
                    
               </form>
        
            </div>

        </div>


          



        
            
        </div>
    );
};

export default EachHomeDetails;