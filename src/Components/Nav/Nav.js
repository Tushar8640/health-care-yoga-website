import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import logo from "../../images/logo.png";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogOut = () => {
    logOut();
  };
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <div className="shadow px-4 py-2 text-black flex justify-between bg-gray-50 shadow-sm">
        <div>
          <img className="w-3/5" src={logo} alt="" />
        </div>
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
              <Link className="font-semibold" to="/home">
                Home
              </Link>
            </li>
            <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
              <Link className="font-semibold" to="/about">
                AboutUs
              </Link>
            </li>

            <li className="md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
              <Link className="font-semibold" to="/contact">
                Contact
              </Link>
            </li>
            {!user.email &&
              <li className="md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
                <Link  className="border border-gray-500 rounded px-2 py-1 hover:bg-gray-500 transition duration-100 hover:text-white font-semibold" to="/login">
                  Login
                </Link>
              </li>
}
            {user.email &&
              <li className="md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
                <button className="border border-gray-500 rounded px-2 py-1 hover:bg-gray-500 transition duration-100 hover:text-white " onClick={handleLogOut}>Log Out</button>
              </li>
}
            
            <li className="md:inline-block cursor-pointer hover:text-gray-500  md:border-none py-2 px-3">
              <p className="font-semibold text-purple-700">
                {user?.displayName}
              </p>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <span
            onClick={handleToggle}
            class="navicon bg-white-darkest flex items-center relative"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};

// const el = document.querySelector("#root");
// ReactDOM.render(<Nav/>, el);

export default Nav;
