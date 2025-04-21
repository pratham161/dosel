import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center py-5 px-6 md:px-14 bg-gray-900 relative">
      {/* Logo */}
      <a href="#hero" className="h-10">
        <img
          className="object-cover h-28 scale-125 cursor-pointer object-center"
          src="logo.png"
          alt="Logo"
        />
      </a>

      {/* Hamburger Icon for mobile */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex gap-10 md:gap-14 items-center 
        absolute md:static top-20 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent
        transition-all duration-300 ease-in-out
        ${isOpen ? "flex" : "hidden"}`}
      >
        <a href="#hero" className="text-lg text-white cursor-pointer font-roboto py-2 md:py-0">
          Home
        </a>
        <a href="#services" className="text-lg text-white cursor-pointer font-roboto py-2 md:py-0">
          Services
        </a>
        <a href="#vision" className="text-lg text-white cursor-pointer font-roboto py-2 md:py-0">
          Vision
        </a>
        <a href="#contactus" className="text-lg text-white bg-teal-600 px-5 py-2 mt-2 md:mt-0 rounded-xl font-bold cursor-pointer shadow-black font-monserat">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
