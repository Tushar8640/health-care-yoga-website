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
            The Yoga Yajnavalkya is another early text on yoga that provides
            description of Yoga techniques and its benefits. Two of its Sanskrit
            palm-leaf manuscripts have been dated, one is from the early
            10th-century CE and another more{" "}
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
            The Yoga Yajnavalkya is another early text on yoga that provides
            description of Yoga techniques and its benefits. Two of its Sanskrit
            palm-leaf manuscripts have been dated, one is from the early
            10th-century CE and another more{" "}
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
            The Yoga Yajnavalkya is another early text on yoga that provides
            description of Yoga techniques and its benefits. Two of its Sanskrit
            palm-leaf manuscripts have been dated, one is from the early
            10th-century CE and another more{" "}
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
