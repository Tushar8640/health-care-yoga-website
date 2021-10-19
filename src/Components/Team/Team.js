import React from "react";
import { Link } from "react-router-dom";
import mentors1 from "../../images/mentors-1.jpg";
import mentors2 from "../../images/mentors-2.jpg";

const Team = () => {
  return (
    <div className="container m-auto w-5/6 bg-gray-50 md:pt-4">

        <h1 className="text-center my-6 md:my-14 text-2xl md:text-5xl font-medium">Our Instructors</h1>
      <div className="md:flex gap-8">
        <div className="md:w-1/2 text-center mb-8 md:mb-0">
          <img
            className="w-48 h-48 rounded-full mx-auto -mb-24"
            src={mentors1}
            alt="Avatar Jacky"
          />
          <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
            <h3 className="font-title text-gray-800 text-xl mb-3">Lori Mendoza</h3>
            <p className="font-body">Senior Instructor</p>
            <p className="font-body text-sm mb-4">
              She will love to mentors you
            </p>
            <Link className="font-body text-blue-500 hover:text-gray-800" to="/">
              lori@gmail.com
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 text-center">
          <img
            className="w-48 h-48 rounded-full mx-auto -mb-24"
            src={mentors2}
            alt="Avatar Damien Marley"
          />
          <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
            <h3 className="font-title text-gray-800 text-xl mb-3">Mildred Reed</h3>
            <p className="font-body">Senior Instructor</p>
            <p className="font-body text-sm mb-4">
              He&#x27;s fun and listen everyday Bob Marley
            </p>
            <Link
              className="font-body text-blue-500 hover:text-gray-800"
              to="/"
            >
              Mildred @marley.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
