import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {

  // handle registeration form 
  const { setEmail, setPassword, registration, user, setName, error } =
    useFirebase();
  const handleRegistration = (e) => {
    e.preventDefault();
    registration();
  };

  const getName = (e) => {
    setName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(user);
  return (
    <div className="container m-auto w-1/3 my-12">
      <div className="flex justify-center md:shadow-lg p-5">
        <div className="">
          <form onSubmit={handleRegistration}>
            <label class="mb-2 block uppercase tracking-wide text-xs font-bold">
              Name :
            </label>
            <input
              required
              onBlur={getName}
              className="shadow-inner border-gray-200 py-2 px-4 border-0 mb-3"
              type="text"
              placeholder="Your Name"
            />
            <br />

            <label class="mt-3 mb-2 block uppercase tracking-wide text-xs font-bold">
              Email :
            </label>
            <input
            title="Please Input valid Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onBlur={getEmail}
              className="shadow-inner py-2 px-4 border border-gray-200 mb-3"
              placeholder="Your Email"
              type="email"
            />

            <br />

            <label class="mt-3 mb-2 block uppercase tracking-wide text-xs font-bold">
              Password :
            </label>
            <input
              required
              pattern=".{6,}"
              title="Six or more characters"
              onBlur={getPassword}
              className="shadow-inner border-gray-200 py-2 px-4 border-0 mb-4"
              placeholder="Your Password"
              type="password"
            />
            <br />
            <button
              className=" text-white font-semibold bg-gray-500 px-3 py-1 rounded shadow mr-3"
              type="submit"
            >
              SignUp
            </button>
            <br />
            <p className="text-red-600">{error}</p>
            <Link to="/login">
              <p className="mt-3 font-medium text-red-400">Already have account?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
