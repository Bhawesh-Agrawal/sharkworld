"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);

  const toggleDropDown = () => {
    setopen(!open);
  };

  return (
    <div className="flex justify-center items-center bg-[#F5F3F4]">
      <div
        className="w-[90%] h-[145px] m-0 p-2 flex flex-col 
      justify-start items-center font-[erode]"
      >
        <header className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center">
            {/* Logo Div*/}
            <div>
              {/* Logo */}
              <img className="w-[100px] h-[100px]" src="/logo.jpg" alt="logo" />
            </div>
            <div>
              {/* Logo Subheading */}

              <Link href="/curve">
                <p className="text-[9px] tracking-[0.4em] text-[#161A1D]">
                  The Best Mate
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-[15px]">
            {/* Right hand navigation */}
            <div
              className="flex flex-row justify-end items-center md:gap-[35px]
             md:justify-center"
            >
              {/* Hamburger Menu */}
              <div
                className="flex flex-col justify-center items-center
                 h-[40px] gap-[5px]
              md:hidden cursor-pointer"
                onClick={toggleDropDown}
              >
                <div className="w-[30px] h-[2px] bg-black"></div>
                <div className="w-[30px] h-[2px] bg-black"></div>
                <div className="w-[30px] h-[2px] bg-black"></div>
              </div>
              {/* Drop box */}
              {open && (
                <div className="absolute top-[0px] right-0 md:hidden z-10 transition-all duration-500 ease-in">
                  <div
                    className="flex flex-col gap-2 border-2 text-[#a4a2a1] text-[20px] bg-[#F5F3F4]
                p-10 h-[200vw] w-[80vw] transition-all duration-500 ease-in"
                  >
                    <div
                      className="relative cursor-pointer"
                      onClick={toggleDropDown}
                    >
                      <div className="w-[30px] h-[2px] bg-black rotate-45"></div>
                      <div className="w-[30px] h-[2px] bg-black -rotate-45"></div>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-10 gap-6">
                      <div>
                        <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                          Home
                        </p>
                      </div>
                      <div className="w-[200px] h-[2px] bg-gray-500"></div>
                      <div>
                        <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                          About
                        </p>
                      </div>
                      <div className="w-[200px] h-[2px] bg-gray-500"></div>
                      <div>
                        <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                          Cart
                        </p>
                      </div>
                      <div className="w-[200px] h-[2px] bg-gray-500"></div>
                      <div>
                        <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                          Login
                        </p>
                      </div>
                      <div
                        className="w-[160px] h-[55px] flex justify-center 
                  items-center bg-[#E5383B] rounded-md hover:opacity-50 mt-10"
                      >
                        {/* Shop Now */}
                        <button className="max-w-[100%] font-semibold text-[22px] text-white">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <p
                className="text-[#B1A7A6] text-[20px] font-semibold hidden 
              md:block hover:opacity-50 cursor-pointer"
              >
                Home
              </p>
              <p
                className="text-[#B1A7A6] text-[20px] font-semibold hidden 
              md:block hover:opacity-50 cursor-pointer"
              >
                About
              </p>
              <p
                className="text-[#B1A7A6] text-[20px] font-semibold hidden
               md:block hover:opacity-50 cursor-pointer"
              >
                Cart
              </p>
              <p
                className="text-[20px] font-semibold text-[#E5383B] 
              hidden md:block hover:opacity-50 cursor-pointer"
              >
                Login
              </p>
            </div>
            <div className="w-[1px] h-[45px] bg-[#161A1D]">
              {/* Seperator */}
            </div>
            <div
              className="w-[120px] h-[45px] flex justify-center 
            items-center bg-[#E5383B] rounded-md hover:opacity-50"
            >
              {/* Shop Now */}
              <button className="max-w-[100%] font-semibold text-[18px]">
                Shop Now
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
