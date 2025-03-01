"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "./Card"; // Assuming Card is your component
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { duration } from "@mui/material";

const CardsSwipe = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null); // Main container for cards
  const [isMobile, setisMobile] = useState(false);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const isMobileCheck = () => {
      if (typeof window !== "undefined") {
        setisMobile(window.innerWidth <= 768);
      }
    };

    isMobileCheck();
    window.addEventListener("resize", isMobileCheck);

    return () => {
      window.removeEventListener("resize", isMobileCheck);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      cardRefs.forEach((ref, index) => {
        if (ref.current) {
          const animationProps = isMobile
            ? {
                opacity: 1, // Optional: Keep cards visible
              }
            : {
                // Desktop: Apply x movement and skew
                skewY: index % 2 === 0 ? -10 : 10,
                x: index % 2 === 0 ? -150 : 150,
                opacity: 1,
              };

          gsap.to(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              pin: true, // Pin the element while scrolling
              start: () => {
                if (index === 0) {
                  return "top";
                } else if (index === 1) {
                  return "top-=100px";
                } else if (index === 2) {
                  return "top-=200px";
                } else {
                  return "top-=300px";
                }
              }, // Start when the top of the element hits 80% of the viewport height
              end: () => {
                const containerHeight = cardContainerRef.current
                  ? cardContainerRef.current.offsetHeight
                  : window.innerHeight * 3; // Fallback to 300vh if undefined
                return `${containerHeight + 1600}`;
              }, // Ensure scroll ends at the right point without extra space
              toggleActions: "play none none reverse",
              scrub: true,
            },
            ...animationProps,
          });
        }
      });
    }, cardContainerRef);

    return () => context.revert(); // Cleanup
  }, [isMobile]);

  return (
    <div
      ref={cardContainerRef}
      className="flex flex-col items-center gap-16 bg-[#161A1D] w-full py-20 md:py-40 h-fit md:h-[300vh] rounded-[20px] overflow-x-hidden"
      style={{ overflow: "hidden" }} // Prevent overflow outside container
    >
      <Card
        ref={cardRefs[0]}
        image="/Card1.png"
        description="Pentonic pens undergo rigorous testing to ensure smooth writing, consistent ink flow, and long-lasting performance."
        color="#660708"
        textpos="left"
        textcol="white"
      />
      <Card
        ref={cardRefs[1]}
        image="/Card2.webp"
        description="Pentonic delivers exceptional value for money. Our pens are competitively priced, making them a reliable and budget-friendly."
        color="#D3D3D3"
        textpos="right"
        textcol="black"
      />
      <Card
        ref={cardRefs[2]}
        image="/Card3.png"
        description="One of the hallmarks of the Pentonic brand is its wide variety of writing instruments."
        color="#660708"
        textpos="left"
        textcol="white"
      />
      <Card
        ref={cardRefs[3]}
        image="/pentonic_ball3.webp"
        description="Ergonomically designed grips and smooth ink ensure comfortable writing experiences, even during extended writing sessions."
        color="#D3D3D3"
        textpos="right"
        textcol="black"
      />
    </div>
  );
};

export default CardsSwipe;
