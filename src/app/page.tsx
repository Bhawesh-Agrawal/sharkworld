import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-[90%]">
      <div className="flex justify-center items-center">
        <p className="text-[40px] text-[#161A1D] font-Bonda md:text-[60px]">
          The Best Mate
        </p>
      </div>
      <div className="h-[40px] w-full"></div>
      <div className="w-full flex relative z-0">
        <img
          className="rounded-[20px] h-[842px] w-full object-cover"
          src="/Poster.jpg"
          alt="Poster"
        />
        <button
          className="absolute w-52 h-16 bg-[#E5383B] 
        rounded-lg right-16 bottom-16 mr-auto hover:opacity-80"
        >
          <p className="max-w-[100%] text-[22px] tracking-widest">Shop Now</p>
        </button>
      </div>
      <div className="h-[92px] w-full"></div>
      <div className="grid grid-rows-3 lg:grid-cols-3 gap-[10px] md:gap-[10px] md:px-5 lg:gap-[20px] 2xl:gap-[40px] max-w-full">
        <div className="flex flex-col justify-center items-center gap-[60px] bg-[#161A1D] h-[450px] w-full rounded-[20px] opacity-90">
          <GroupsIcon
            style={{ fontSize: "70px", color: "#BA181B" }}
          ></GroupsIcon>
          <p className="w-[334px] text-[#F5F3F4] text-[30px] text-center max-w-[100%]">
            "Consumer first choice for quality stationary- where creativity
            meets precision!"
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[60px] bg-[#161A1D] h-[450px] w-full rounded-[20px] opacity-90">
          <StarIcon style={{ fontSize: "70px", color: "#BA181B" }}></StarIcon>
          <p className="w-[334px] text-[#F5F3F4] text-[30px] text-center max-w-[100%]">
            "Consumer first choice for quality stationary- where creativity
            meets precision!"
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[60px] bg-[#161A1D] h-[450px] w-full rounded-[20px] opacity-90">
          <PriceCheckIcon
            style={{ fontSize: "70px", color: "#BA181B" }}
          ></PriceCheckIcon>
          <p className="w-[334px] text-[#F5F3F4] text-[30px] text-center max-w-[100%]">
            "Consumer first choice for quality stationary- where creativity
            meets precision!"
          </p>
        </div>
      </div>
    </div>
  );
}
