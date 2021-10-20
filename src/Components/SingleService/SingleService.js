import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    return (
        <div
        className=" hover:shadow-lg w-8/9  text-center p-3  rounded-lg transition duration-300"
        style={{ maxHeight: "580px" }}
      >
        <img className="w-3/5 text-center m-auto" src={service?.picture} alt="" />
        <h3 className="text-xl font-semibold text-center">{service?.name}</h3>
        <h1>{service?.teacher}</h1>
        <h3 className="text-gray-600 pt-3 text-sm text-center">
          {service?.catagory}
        </h3>
        <h2 className="text-2xl font-semibold text-center mt-2">{service?.price}</h2>
        <Link to={`/details/${service?.id}`}>
          <button className="bg-gray-500 px-3 py-1 rounded shadow text-white my-2 px-6 py-1  hover:bg-white hover:border-gray-500 hover:text-gray-700  border-2 transition duration-300 hover:shadow-inner ">
            Details
          </button>
        </Link>
  
        {/* <button
        onClick={()=>addItem(service)}
        className="bg-yellow-400 text-black my-2 px-6 py-1 rounded-full hover:bg-white hover:border-yellow-500 hover:text-yellow-600  border-2 transition duration-300 hover:shadow-inner ml-4">
          Add To Cart
        </button> */}
      </div>
    );
};

export default SingleService;