import React, { useContext } from "react";
import bg_svg from "../../asect/bg-svg/registraton-img.svg";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="min-h-screen px-4"
      style={{ backgroundImage: `url(${bg_svg})` }}
    >
      <div
        className={`sm:w-96 mx-auto shadow-xl p-8 mt-10 rounded-lg bg-white`}
      >
        <h1 className="text-center  mb-4 text-3xl text-primary font-semibold">
          Login
        </h1>
        <form onSubmit={loginHandler}>
          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className=" rounded-lg flex flex-col gap-2 mb-4  ">
            <label htmlFor="password" className="text-xl font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Email"
              className="flex-auto p-4 block rounded-lg font-medium outline-none border border-transparent border-stone-600 focus:border-primary focus:text-black"
            />
          </div>

          <div className="flex justify-center mt-5 pb-5">
            <button className="text-center w-full border border-primary hover:border-primary hover:bg-transparent hover:text-primary  px-10 bg-primary text-white transition-all py-2 text-xl font-medium rounded">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
