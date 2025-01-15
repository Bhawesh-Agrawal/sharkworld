"use client";

import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React, { use, useState, useEffect } from "react";

interface DecodedToken {
  username: string;
  exp?: number; // Token expiry time (optional)
}

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);

  const toggleDropDown = () => {
    setopen(!open);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token); // Decode token with type
        setUser(decoded); // Set the decoded user information
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#030F26]">
      <div
        className="w-[90%] h-[145px] m-0 p-2 flex flex-col 
      justify-start items-center font-[erode]"
      >
        <header className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center">
            {/* Logo Div*/}
            <div className="pt-6">
              {/* Logo */}
              <img className="w-[100px] h-[100px]" src="/Logo.jpg" alt="logo" />
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
                <div className="w-[30px] h-[2px] bg-white"></div>
                <div className="w-[30px] h-[2px] bg-white"></div>
                <div className="w-[30px] h-[2px] bg-white"></div>
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
                      <Link href="/..">
                        <div>
                          <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                            Home
                          </p>
                        </div>
                      </Link>
                      <div className="w-[200px] h-[2px] bg-gray-500"></div>
                      <Link href="/About">
                        <div>
                          <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                            About
                          </p>
                        </div>
                      </Link>
                      <div className="w-[200px] h-[2px] bg-gray-500"></div>
                      {user ? (
                        <Link href="/Profile">
                          <div>
                            <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                              {user.username}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <Link href="/Login">
                          <div>
                            <p className="text-[#B1A7A6] text-[20px] font-semibold hover:opacity-50 cursor-pointer">
                              Login
                            </p>
                          </div>
                        </Link>
                      )}

                      <div
                        className="w-[160px] h-[55px] flex justify-center 
                  items-center bg-[#E5383B] rounded-md hover:opacity-50 mt-10"
                      >
                        {/* Shop Now */}
                        <button className="max-w-[100%] font-semibold text-[22px] text-white">
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <Link href="/..">
                <p
                  className="text-[#B1A7A6] text-[20px] font-semibold hidden 
              md:block hover:opacity-50 cursor-pointer"
                >
                  Home
                </p>
              </Link>
              <Link href="/About">
                <p
                  className="text-[#B1A7A6] text-[20px] font-semibold hidden 
              md:block hover:opacity-50 cursor-pointer"
                >
                  About
                </p>
              </Link>
              {user ? (
                <Link href="/Profile">
                  <p
                    className="text-[20px] font-semibold text-[#E5383B] 
              hidden md:block hover:opacity-50 cursor-pointer"
                  >
                    {user.username}
                  </p>
                </Link>
              ) : (
                <Link href="/Login">
                  <p
                    className="text-[20px] font-semibold text-[#E5383B] 
              hidden md:block hover:opacity-50 cursor-pointer"
                  >
                    Login
                  </p>
                </Link>
              )}
            </div>
            <div className="w-[1px] h-[45px] bg-gray-400">
              {/* Seperator */}
            </div>
            <div
              className="w-[120px] h-[45px] flex justify-center 
            items-center bg-[#E5383B] rounded-md hover:opacity-50"
            >
              {/* Shop Now */}
              <button className="max-w-[100%] font-semibold text-[18px] text-white">
                View Product
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
