import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold font-monserat">
          Dosel<span className="text-teal-500">Tech</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm font-roboto text-gray-300">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Services
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-teal-500 text-xl">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 font-roboto">
        &copy; {new Date().getFullYear()} Dosel Technologies. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
