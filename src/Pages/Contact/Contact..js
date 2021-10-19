import React from "react";

const Contact = () => {

    const handleOnsubmit=e=>{
        e.preventDefault()
        
    }
  return (
    <div className="container mx-auto my-10">
      <form onSubmit={handleOnsubmit} class="flex  mx-auto max-w-4xl space-x-3">
        <div class="w-full  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            <h1 className="text-4xl text-center text-gray-700 font-semibold">
              Contact us
            </h1>
          </div>
          <div class="grid w-full grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="email"
                />
              </div>
            </div>
            <div class="col-span-2">
              <label class="text-gray-700" for="name">
                <textarea
                  class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div class="col-span-2 text-right">
              <button
                type="submit"
                class="py-2 px-4  bg-gray-500 hover:bg-gray-700 focus:ring-gray-700 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
