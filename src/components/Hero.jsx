import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col md:flex-row items-center bg-gray-900">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 md:p-16 flex justify-center flex-col gap-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-monserat font-black leading-tight">
          Transforming Enterprises with Smart Technology and Strategic Marketing
        </h1>
        <div>
          <a href="#contactus" className="text-lg md:text-2xl text-white bg-teal-600 px-6 py-3 rounded-xl font-bold cursor-pointer shadow-md font-roboto">
            Contact us
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full h-auto object-cover"
          src="herographic.png"
          alt="Hero Graphic"
        />
      </div>
    </div>
  );
};

export default Hero;
