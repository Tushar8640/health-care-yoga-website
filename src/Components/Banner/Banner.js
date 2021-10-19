import React from "react";
import banner from "../../images/banner-img.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover md:h-screen  bg-center mx-auto px-3   text-white  object-fill"
        style={{
          backgroundImage: "url(https://i.ibb.co/M7bgpJF/banner-img.jpg)",
        }}
      >
        <div className="md:pt-40 md:ml-24 pt-6">
         
          <div className=" md:justify-start md:ml-24">
            <div >
              <h2>Welcome to Yoga Fit </h2>
              <h1 className="text-xl sm:text-2xl md:text-5xl mt-3 font-semibold">
                What hurts today <br /> makes you stronger <br /> tomorrow
              </h1>
              <button className="bg-white  text-black px-2  md:px-4 md:border md:border-gray-600 mt-6 mb-5 md:py-2 py-1 rounded hover:bg-gray-300 font-medium transition duration-300 hover:border-gray-500 hover:text-gray-700">
                {" "}
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
