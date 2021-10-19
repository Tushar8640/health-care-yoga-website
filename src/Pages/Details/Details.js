import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const Details = () => {
    const {id} =useParams();
    const {services}=useServices();
    console.log(services)
    const singleDetails = services?.filter((service) => service.id == id && service);
    console.log(singleDetails[0]);
    return (
        <div className="container m-auto w-5/6 my-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                <div className="md:col-span-2 shadow-lg p-6">
                    <img className="w-3/6" src={singleDetails[0]?.picture} alt="" />
                    <h1 className="text-2xl md:text-5xl my-2 md:my-10 font-medium">{singleDetails[0]?.name}</h1>
                    <h2 className="font-medium text-lg">Mentors : {singleDetails[0]?.teacher}</h2>
                    <h2 className="text-lg">Catagory : {singleDetails[0]?.catagory}</h2>
                    <p className="my-4">The practice of yoga has been thought to date back to pre-vedic Indian traditions; possibly in the Indus valley civilization around 3000 BCE. Yoga is mentioned in the Rigveda and referenced in the Upanishads,. Although, yoga most likely developed as a systematic study around the 5th centuries.</p>
                </div>
                <div className="md:col-span-1 shadow-lg p-6">
                    <h2 className="md:text-3xl text-xl font-medium">Price : {singleDetails[0]?.price}</h2>
                    <h2 className="md:text-3xl text-xl my-4">{singleDetails[0]?.lessons}</h2>
                    <h2 className="md:text-3xl text-xl my-4">{singleDetails[0]?.students}</h2>

                    <button
                
                className="py-2 px-4  bg-gray-500 hover:bg-gray-700 focus:ring-gray-700 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Buy Now
              </button>
                </div>
            </div>

        </div>
    );
};

export default Details;