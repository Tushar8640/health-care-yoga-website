import React from "react";
import { Link ,useLocation,useHistory} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {

  // handle login with email pass and with login 
  const {
    user,
    loginWithGoogle,
    setEmail,
    setPassword,
    setError,
    loginWithEmailPass,
    setUser,
    error,
    setIsloading
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleSubmit = (e) => {
    e.preventDefault();

    // email and pass login 
    loginWithEmailPass()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsloading(false));
    // console.log(user);
  };
  
  // login with gmail 
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
      })
      .finally(()=>setIsloading(false));
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="py-10 containr px-2 m-auto w-full md:w-1/3">
      <div className="flex justify-center md:shadow-lg p-5">
        <div>
          <form onSubmit={handleSubmit}>
            <label className="mt-3 mb-2 block uppercase tracking-wide text-xs font-bold">
              Email :
            </label>
            <input
              onBlur={getEmail}
              className="shadow-inner py-2 px-4 border border-gray-200 mb-3"
              placeholder="Your Email"
              type="email"
            />

            <br />

            <label className="mt-3 mb-2 block uppercase tracking-wide text-xs font-bold">
              Password :
            </label>
            <input
              onBlur={getPassword}
              className="shadow-inner border-gray-200 py-2 px-4 border-0 mb-4"
              placeholder="Your Password"
              type="password"
            />
            <br />
            <div >
              <button
                className=" text-white font-semibold hover:bg-gray-600 transition duration-150 bg-gray-500 px-3 py-1 rounded shadow mr-3"
                type="submit"
              >
                Login
              </button>
              <br />
              <p className="my-1">OR</p>
              <button
                onClick={handleLoginWithGoogle}
                className=" text-white hover:bg-gray-600 transition duration-150 font-semibold flex  justify-center items-center bg-gray-500 px-3 py-1 rounded shadow"
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Login with Google
              </button>
            </div>
            <br />
            <p className="text-red-600">{error}</p>
            <Link to="/register">
              <p className="mt-1 font-medium">
                Dont have an account?
                <span className="text-red-500"> Register!</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
