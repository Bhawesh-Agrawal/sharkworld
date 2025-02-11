"use client";
import GroupsIcon from "@mui/icons-material/Groups";
import StarIcon from "@mui/icons-material/Star";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import Promotionbrd from "./components/Promotion_brd";
import CardsSwipe from "./components/CardsSwipe";
import Product from "./components/Product";
import Visual from "./components/Visual";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  
  return (
    <div className="w-[90%]">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center relative z-0 py-10 rounded-[20px]">
        <div className="w-[90%] lg:w-[60%] flex flex-col items-center justify-start rounded-[20px] h-[842px] border-black border-opacity-20">
          <div className="pt-8 md:pt-12">
            <p className="text-[#F5F3F4] font-semibold text-[40px] whitespace-nowrap  max-w-[90%] lg:text-[80px] font-Bonda">
              The Best Mate
            </p>
          </div>
          <div className="flex items-center justify-center pt-8">
            <p className="text-white font-normal text-[20px] max-w-[90%] text-center md:text-[24px] lg:text-start md:pl-7 lg:max-w-[80%] lg:text-[22px] 2xl:text-[26px]">
              Discover the perfect writing experience with{" "}
              <span className="font-bold">SHARK ENTERPRISES</span>, your trusted
              partner in quality stationery. We take pride in bringing you the
              <span className="text-red-400 font-semibold">
                {" "}
                finest selection
              </span>{" "}
              of pens and writing instruments, featuring renowned brands like
              Pentonic, Kangaroo, Monami, and Snowman. Our products are crafted
              to provide{" "}
              <span className="text-red-400 font-semibold">
                smooth, reliable, and enjoyable
              </span>{" "}
              writing for all your needs, from professional workspaces to
              creative projects. With{" "}
              <span className="font-bold">SHARK ENTERPRISES</span>, excellence
              and innovation are always at your fingertips. Elevate your writing
              with our premium stationery solutions, designed to inspire and
              empower.
            </p>
          </div>
          <div className="pt-6 md:pt-10">
            <button
              className="relative w-52 h-16 bg-[#E5383B] 
        rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              <p className="max-w-[100%] text-[22px] tracking-widest 2xl:text-[26px] text-white font-semibold">
                Shop Now
              </p>
            </button>
          </div>
        </div>
        <div className="w-[40%] hidden lg:block">
          <img
            className="rounded-[20px] h-[842px] w-full object-contain"
            src="/pen-illustration.png"
            alt="Poster"
          />
        </div>
      </div>
      <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-[10px] md:gap-[10px] md:px-5 lg:gap-[20px] 2xl:gap-[40px] max-w-full">
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
            "Discover the best in stationery – where exceptional quality meets
            your every need!"
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[60px] bg-[#161A1D] h-[450px] w-full rounded-[20px] opacity-90">
          <PriceCheckIcon
            style={{ fontSize: "70px", color: "#BA181B" }}
          ></PriceCheckIcon>
          <p className="w-[334px] text-[#F5F3F4] text-[30px] text-center max-w-[100%]">
            "Unbeatable prices, unmatched quality – your go-to destination for
            all your stationery needs!"
          </p>
        </div>
      </div>
      <div className="h-[92px] w-full"></div>
      <Promotionbrd />
      <div className="h-[92px] w-full"></div>
      <CardsSwipe />
      <div className="h-[92px] w-full"></div>
      <Product />
      <div className="h-[92px] w-full"></div>
      <Visual />
      <div className="h-[92px] w-full"></div>
      <div className="h-[92px] w-full"></div>
    </div>
  );
}
