import React from 'react'
// import bg_svg from '../../asect/bg-svg/16921580449449347440.jpg'
import bg_svg from '../../asect/bg-svg/registraton-img.svg'
const SignUp = () => {
  return (
    <div className="px-4" style={{ backgroundImage: `url(${bg_svg})` }}>
      <div
        className={`md:w-1/2 md:min-w-[650px] mx-auto shadow-xl p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="text-center  mb-4 text-3xl text-primary font-semibold">
          Registration for User
        </h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="f_name" className="text-xl font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black "
              />
            </div>

            <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="l_name" className="text-xl font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>

          <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Phone Number
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Email"
                class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
            <div class=" rounded-lg flex flex-col gap-2 mb-4  ">
              <label htmlFor="email" className="text-xl font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Email"
                class="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
