import React from "react";

const Visual = () => {
  return (
    <div>
      <div className="h-[200vh] lg:h-fit bg-[#161A1D] rounded-[20px] w-full flex flex-col">
        {/* Column 1 */}
        <div className="flex flex-col lg:flex-row w-full px-10 py-5 h-[75.6vh] justify-between gap-5 lg:gap-0">
          {/* Box 1 */}
          <div
            className="w-full lg:w-[68.5%] rounded-[20px] h-full bg-gradient-to-r
           from-red-500 via-purple-500 to-blue-500 animate-gradient-x 
           shadow-[0_8px_30px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col items-center justify-center"
          >
            <p className="text-blue-950 text-[27px] pt-5 font-bold max-w-full text-nowrap 2xl:text-[80px] lg:text-[60px]">
              Creativity Starts Here
            </p>
            <p className="text-white pt-1 text-center text-[20px] max-w-[90%] lg:text-[40px]">
              Unlock your imagination with our premium range of pens, markers,
              and creative tools from brands you trust
            </p>
          </div>
          {/* Box 2 */}
          <div
            className="w-full lg:w-[28.5%] rounded-[20px] h-full bg-gradient-to-r
           from-blue-500 via-purple-500 to-red-500 animate-gradient-x-y 
           shadow-[0_8px_30px_rgba(0,0,0,1)] flex flex-col items-center justify-center"
          >
            <p className="text-white text-[35px] pt-5 font-bold 2xl:text-[60px] lg:text-[40px]">
              Precision
            </p>
            <p className="text-white text-[35px] pt-5 font-bold 2xl:text-[60px] lg:text-[40px]">
              Quality
            </p>
            <p className="text-white text-[35px] pt-5 font-bold 2xl:text-[60px] lg:text-[40px]">
              Innovation
            </p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col lg:flex-row w-full px-10 py-5  h-[75.6vh] justify-between gap-5 lg:gap-0">
          {/* Box 3 */}
          <div
            className="w-full lg:w-[31.7%] rounded-[20px] h-full bg-gradient-to-r
           from-red-500 to-purple-500 animate-gradient-xy shadow-[0_8px_30px_rgba(0,0,0,1)] flex flex-row items-center justify-center px-5 
           lg:flex-col"
          >
            <p className="text-white text-[20px] font-bold 2xl:text-[50px] lg:text-[40px] text-center">
              Range of Products
            </p>
            <p className="text-white text-[25px] font-bold pl-5 lg:text-[70px]">
              30+
            </p>
          </div>
          {/* Box 4 */}
          <div
            className="w-full lg:w-[31.7%] rounded-[20px] h-full bg-gradient-to-r from-purple-500 to-blue-500 
          animate-gradient-x-y-z shadow-[0_8px_30px_rgba(0,0,0,1)]  flex flex-row items-center justify-center px-5
          lg:flex-col"
          >
            <p className="text-blue-950 text-[20px] font-bold 2xl:text-[50px] lg:text-[40px] text-center">
              Avg. Customer Sale
            </p>
            <p className="text-blue-950 text-[25px] font-bold pl-2 lg:text-[70px]">
              600+
            </p>
          </div>
          {/* Box 5 */}
          <div
            className="w-full lg:w-[31.7%] rounded-[20px] h-full bg-gradient-to-r 
          from-blue-500 via-purple-500 to-red-500 animate-gradient-x-y 
          shadow-[0_8px_30px_rgba(0,0,0,1)]  flex flex-row items-center justify-center px-5
          lg:flex-col"
          >
            <p className="text-white text-[20px] font-bold 2xl:text-[50px] lg:text-[40px] text-center">
              Number of Dealer
            </p>
            <p className="text-white text-[25px] font-bold pl-5 lg:text-[70px]">
              150+
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full px-10 py-5  h-[75.6vh] justify-between gap-5 lg:gap-0">
          <div
            className="w-full lg:w-[28.5%] rounded-[20px] h-full bg-gradient-to-r 
          from-red-500 via-purple-500 to-blue-500 animate-gradient-x shadow-[0_8px_30px_rgba(0,0,0,1)] lg:pt-16 flex flex-col justify-center items-center lg:justify-start"
          >
            <p className="text-white text-[30px] font-bold px-5 pt-3 text-nowrap 2xl:text-[60px] lg:text-[30px]">
              Why Choose Us?
            </p>
            <p className="text-blue-950 text-[18px] px-5 pt-1 font-semibold 2xl:text-[30px] lg:text-[25px] lg:pt-5">
              Trusted by thoushands of customer nationwide.
            </p>
            <p className="text-blue-950 text-[18px] px-5 pt-1 font-semibold 2xl:text-[30px] lg:text-[25px] lg:pt-5">
              Dedicated to delivering quality stationary products.
            </p>
            <p className="text-blue-950 text-[18px] px-5 pt-1 font-semibold 2xl:text-[30px] lg:text-[25px] lg:pt-5">
              Unparalleled customer support and fast delivery.
            </p>
          </div>
          <div
            className="w-full lg:w-[68.5%] rounded-[20px] h-full bg-gradient-to-r 
          from-blue-500 via-purple-500 to-rd-500 animate-gradient-x-y shadow-[0_8px_30px_rgba(0,0,0,1)] flex flex-col items-center justify-center px-5"
          >
            <p className="text-blue-950 text-[30px] font-bold pt-5 text-nowrap lg:text-[60px]">
              Join the Movement
            </p>
            <p className="text-white text-[20px] font-semibold  text-center lg:text-[40px]">
              Be part of our growing family of creators and professionals.
              Together, ket's shape ideas into reality with premium stationary
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual;
