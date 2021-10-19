import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/about.png";
const About = () => {
  return (
    <div className="container mx-auto ">
      <div className="bg-lightblue py-20 px-4">
        <div className="mx-auto max-w-6xl  flex flex-col md:flex-row">
          <img className="md:w-3/6 w-4/6 mx-4" src={img} alt="" />
          <div className="w-full md:w-2/3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">About Our School</h3>
              <h2 className="mr-8 w-full md:w-1/3 text-3xl font-bold leading-9">
                How we become Yoku
              </h2>
            </div>
            <div className="mb-16">
              <p>
                Modern yoga consists of a range of techniques including asanas
                (postures) and meditation derived from some of the philosophies,
                teachings and practices of the Yoga school, which is one of the
                six schools of traditional Hindu philosophies, and organised
                into a wide variety of schools and denominations. It has been
                described by Elizabeth de Michelis as having four types, namely:
                Modern Psych osomatic Yoga, as in The Yoga Institute.
              </p>
              <Link to="/">
                <button
                  type="button"
                  class="py-2 md:py-3 px-4 md:px-5 md:mt-6 mt-3  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                >
                  Bye Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
