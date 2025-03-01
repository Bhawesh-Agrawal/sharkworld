import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="bg-[#030F26]">
      <div className="w-full h-[1px] mb-20"></div>
      <div className="w-[90%] flex flex-col lg:flex-row gap-14 justify-center ml-[5%]">
        {/* Logo with company name */}
        <div className="flex flex-col items-left justify-left gap-5 lg:w-[38%]">
          <div className="flex flex-row items-center justify-left gap-5">
            <img className="size-16" src="/Logo.jpg" alt="Logo" />
            <p className="font-bold text-[25px] text-white">
              Shark Enterprises Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[18px] text-white">
              Shark Enterprises is a leading wholesale distributor of
              high-quality stationery products in Nepal. We specialize in
              trusted brands like Pentonic, Kangaroo, Monami, and Snowman,
              offering the best prices for all your stationery needs. Our
              mission is to deliver premium products and exceptional value
              across the country.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <InstagramIcon className="hover:cursor-pointer" />
            <FacebookIcon className="hover:cursor-pointer" />
            <WhatsAppIcon className="hover:cursor-pointer" />
            <EmailIcon className="hover:cursor-pointer" />
          </div>
        </div>
        {/* Hyperlinks */}
        <div className="flex flex-col justify-left items-left list-none lg:w-[33%] lg:pl-20">
          <p className="font-bold text-[22px] text-white">Quick Links</p>
          <li className="pt-5 hover:cursor-pointer hover:text-decoration-line hover:underline transition-all duration-2000 text-[20px] text-white">
            Home
          </li>
          <li className="pt-5 hover:cursor-pointer hover:text-decoration-line hover:underline transition-all duration-2000 text-[20px] text-white">
            About Us
          </li>
          <li className="pt-5 hover:cursor-pointer hover:text-decoration-line hover:underline transition-all duration-2000 text-[20px] text-white">
            Contact Us
          </li>
          <li className="pt-5 hover:cursor-pointer hover:text-decoration-line hover:underline transition-all duration-2000 text-[20px] text-white">
            View Product
          </li>
          <li className="pt-5 hover:cursor-pointer hover:text-decoration-line hover:underline transition-all duration-2000 text-[20px] text-white">
            Catalouge
          </li>
        </div>
        {/* Social Media and Contact Information */}
        <div className="flex flex-col w-[70%] gap-3 lg:w-[33%]">
          <p className="font-bold text-[22px] text-white">For Contact</p>
          <p className="text-[20px] text-white">
            Aside Montessori School, Bhotebahal, Kathmandu, 44600, ward no:3
          </p>
          <p className="text-[20px] text-white">Email: sharkworld@gmail.com</p>
          <p className="text-[20px] text-white">Contact: +977-9xxxxxxxxx</p>
        </div>
      </div>
      <p className="pt-10 font-thin text-gray-500 ml-[5%]">
        Copyright © 2024 Shark Enterprises | Bhotebahal, Kathmandu-3, 44600
      </p>
      <span className="text-red-600 hover:cursor-pointer hover:opacity-70 transition-all duration-2000 ml-[5%]">
        Terms & Conditions
      </span>
    </div>
  );
};

export default Footer;
