import React, { useEffect, useState } from "react";
import SingleService from "../../Components/SingleService/SingleService";
import useServices from "../../Hooks/useServices";

const Services = () => {
    const {services}= useServices()
  // console.log(services)
  return (
    <div className="container m-auto gap-3 my-5 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
        {services.map((service) => (
          <SingleService service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
