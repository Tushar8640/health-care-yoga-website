import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { user, loginWithGoogle ,setEmail,setPassword,loginWithEmailPass} =useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmailPass()
    console.log(user)
  };
  const handleLoginWithGoogle = () => {
    loginWithGoogle();
  };
const getEmail=(e)=>{
  setEmail(e.target.value)
}
const getPassword = e =>{
  setPassword(e.target.value)
}
  return (
    <div className="py-10 containr px-2 m-auto w-full md:w-1/3">
      <div className="flex justify-center md:shadow-lg p-5">
        <div>
          <form onSubmit={handleSubmit}>
            <label
             class="mt-3 mb-2 block uppercase tracking-wide text-xs font-bold">
              Email :
            </label>
            <input
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
              Login
            </button>
            <button
              onClick={handleLoginWithGoogle}
              className=" text-white font-semibold bg-gray-500 px-3 py-1 rounded shadow"
            >
              Google
            </button>
            <br />
            <Link to="/register">
              <p className="mt-3">Create account</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
