import { forwardRef } from "react";

interface CardProps {
  image: string;
  description: string;
  color: string;
  textpos: "left" | "right"; // Only allow 'left' or 'right' for text position
  textcol: "white" | "black"; // Only allow 'white' or 'black' for text color
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ image, description, color, textpos, textcol }: CardProps, ref) => {
    const textalign = textpos === "left" ? "text-left" : "text-right";
    const textcolor = textcol === "white" ? "text-[#F5F3F4]" : "text-[#161A1D]";

    return (
      <div
        ref={ref} // Attach the ref here
        style={{ backgroundColor: color }}
        className="w-[280px] h-[345px] md:w-[400px] md:h-[490px] flex flex-col items-center p-4 md:p-8 rounded-[30px]"
      >
        <img
          className="w-[95%] h-[50%] rounded-[30px]"
          src={image}
          alt="Card Image"
        />
        <div>
          <p
            className={`${textcolor} max-w-[100%] pt-6 md:pt-7 pl-2 text-[16px] md:text-[24px] ${textalign} font-semibold`}
          >
            "{description}"
          </p>
        </div>
      </div>
    );
  }
);

export default Card;
