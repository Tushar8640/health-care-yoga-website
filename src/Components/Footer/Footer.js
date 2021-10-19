import React from "react";
import logo from "../../images/footer.png";

const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className=" container text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-4 px-3 py-5">
        <div>
          <img className="md:w-5/6 ml-5 md:ml-0 w-2/4" src={logo} alt="" />
          <h1 className="text-white mt-5"> Mon - Fri: 6:30am - 07:45pm</h1>
          <h1 className="text-white">Sat - Sun: 8:30am - 05:45pm</h1>
        </div>

        <div className="mt-4">
          <h1 className="md:text-2xl text-xl text-white font-bold ">
            Quick Links
          </h1>
          <h1 className="text-white mt-5">Pricing</h1>
          <h1 className="text-white mt-2">Courses</h1>
          <h1 className="text-white mt-2">FAQ</h1>
          <h1 className="text-white mt-2">Terms of Service</h1>
        </div>

        <div className="md:mt-16">
          <h1 className="text-white mt-2">Become Instructor </h1>
          <h1 className="text-white mt-2">Contact Us</h1>
          <h1 className="text-white mt-2">Privacy Policy</h1>
        </div>

        <div className=" md:mt-5 mt-3 ">
          <h1 className="md:text-2xl text-xl text-white font-bold ">
            {" "}
            Contact Info
          </h1>

          <h1 className="text-white mt-2">
            <p>1810 Kings Way </p> 
            <p>King Street,</p>
             5th Avenue, New York
          </h1>
          <div className="text-white mt-2">
            <svg
              className="w-5 h-5 mr-3 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>www.com</span>
          </div>
          <div className="text-white mt-2">
            <svg
              className="w-5 h-5 mr-3 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>1800-2355-2356</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
