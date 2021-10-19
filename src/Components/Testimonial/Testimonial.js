import React from "react";
import img1 from "../../images/testimonial1.jpg";
import img2 from "../../images/testimonial2.jpg";
import img3 from "../../images/testimonial3.jpg";

const Testimonial = () => {
  return (
    <div className="container md:my-20 m-auto w-9/12">
      <h1 className="text-center my-6 md:ty-14 text-2xl md:text-5xl font-medium">Testimonial</h1>
      <h2 className="text-center my-4">What prople say about us</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* single testimonia */}
        <div className="shadow-lg p-4">
          <h3>
          This RYT Program with Synergy Yoga is a great place to grid the frequency of your purpose into being. This isn't just a teacher training it's an energetic gridding that you will take with you for a lifetime. Many of the things I learned fully sinked in months and even years after this program. 
          </h3>
          <div
            className=" my-3
           flex"
          >
            <img className="w-1/6 rounded-full" src={img1} alt="" />
            <div
              className=" ml-3
            "
            >
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
       
        {/* single testimonia */}
        <div className="shadow-lg p-4">
          <h3>
          I just completed the 200 hour yoga teacher training here. The quality of the training exceeded my expectations. Victoria is simply amazing and full of knowledge, energy, and passion for yoga and for her students. I highly recommend doing classes and any of the trainings. The studio is very intimate and welcoming.
          </h3>
          <div
            className=" my-3
           flex"
          >
            <img className="w-1/6 rounded-full" src={img2} alt="" />
            <div
              className=" ml-3
            "
            >
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
       
        {/* single testimonia */}
        <div className="shadow-lg p-4">
          <h3>
          I take my word very seriously. Completing my yoga training here was absolutely the right move. I entered wanting to understand the cultural and philosophical context of yoga and I received an abundant, extensive curriculum. This was a safe space for me to explore/refine my spirituality and truly study. 
          </h3>
          <div
            className=" my-3
           flex"
          >
            <img className="w-1/6 rounded-full" src={img3} alt="" />
            <div
              className=" ml-3
            "
            >
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p>Customer</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Testimonial;
