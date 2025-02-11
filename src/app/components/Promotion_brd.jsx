"use client";

import { useEffect, useState } from "react";

const Promotionbrd = () => {
  const [color, setcolorchoice] = useState(0);

  const pic_state = (color) => {
    if (color == 0) {
      return "./pentonic-ball2.webp";
    } else if (color == 1) {
      return "./Card1.png";
    } else {
      return "./pentonic_ball3.webp";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setcolorchoice((prevColor) => (prevColor + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="w-[100%] bg-[#D3D3D3] h-[1400px] rounded-[20px] flex flex-col items-center justify-center gap-5 lg:flex-row lg:h-[800px]">
        <div
          className="w-[90%] bg-white h-[35%] rounded-[20px] lg:w-[47%] 
        lg:rounded-l-[20px] lg:h-[90%]"
        >
          <img
            className="h-full w-full rounded-[20px] object-cover lg:rounded-l-[20px]"
            src={pic_state(color)}
            alt=""
          />
        </div>
        <div className="w-[90%] bg-white h-[55%] rounded-[20px] lg:h-[90%] lg:w-[47%] lg:rounded-l-[20px]">
          <div className="flex flex-col w-full items-left justify-left">
            <div className="flex flex-row w-full">
              <div className="w-[50%]"></div>
              <div className="w-[50%] bg-red-600 rounded-[20px] h-[60px] flex items-center justify-center">
                <p className="font-semibold text-[24px] whitespace-nowrap">
                  Top Seller
                </p>
              </div>
            </div>
            <div className="pt-5 pl-5">
              <p className="text-black text-[30px] font-bold">Pentonic Ball</p>
            </div>
            <div className="pt-5 pl-5">
              <p className="text-black text-[16px] max-w-[95%] font-semibold">
                Choose the Pentonic Ball Pen for a writing instrument that not
                only complements your style but also enhances your precision and
                comfort. Make every word count with the ultimate ball pen
                choice—choose the Pentonic Ball Pen and transform your writing
                into an art form.
              </p>
            </div>
            <div className="pt-5 pl-5">
              <p className="text-black text-[20px] font-semibold">Feature</p>
            </div>
            <div className="flex flex-col gap-5 justify-left items-start pt-5">
              <div
                className="ml-5 bg-[#D4D4D4] p-2 rounded-[20px] w-[240px] transition-transform transform hover:scale-110 duration-300"
                style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.35)" }}
              >
                <p className="text-[#660708] text-[16px] text-center">
                  Ultra-Low Viscocity Ink
                </p>
              </div>
              <div
                className="ml-5 bg-[#D4D4D4] p-2 rounded-[20px] w-[240px] transition-transform transform hover:scale-110 duration-300"
                style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.35)" }}
              >
                <p className="text-[#660708] text-[16px] text-center">
                  Sleek Matte Finish
                </p>
              </div>
              <div
                className="ml-5 bg-[#D4D4D4] p-2 rounded-[20px] w-[240px] transition-transform transform hover:scale-110 duration-300"
                style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.35)" }}
              >
                <p className="text-[#660708] text-[16px] text-center">
                  Featherlite feel
                </p>
              </div>
            </div>
            <div className="pt-5 pl-5">
              <p className="text-black text-[20px] font-semibold">Color</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start pl-5 pt-5">
              <div
                className={`${
                  color == 0
                    ? "h-6 w-6 border-2 border-red-600 rounded-full flex items-center justify-center cursor-pointer"
                    : "cursor-pointer"
                }`}
                onClick={() => setcolorchoice(0)}
              >
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
              <div
                className={`${
                  color == 1
                    ? "h-6 w-6 border-2 border-blue-600 rounded-full flex items-center justify-center cursor-pointer"
                    : "cursor-pointer"
                }`}
                onClick={() => setcolorchoice(1)}
              >
                <div className="h-4 w-4 rounded-full bg-blue-600"></div>
              </div>
              <div
                className={`${
                  color == 2
                    ? "h-6 w-6 border-2 border-black rounded-full flex items-center justify-center cursor-pointer"
                    : "cursor-pointer"
                }`}
                onClick={() => setcolorchoice(2)}
              >
                <div className="h-4 w-4 rounded-full bg-black"></div>
              </div>
            </div>
            <div className="pt-5 pl-5">
              <button
                className="p-3 bg-red-600 text-white text-[20px] font-semibold rounded-[10px] hover:opacity-65"
                style={{ boxShadow: "0 4px 4px rgba(0,0,0,0.35)" }}
              >
                View All Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotionbrd;
