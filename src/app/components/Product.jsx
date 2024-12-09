const Product = () => {
  return (
    <div>
      <div className="h-full pb-20 lg:h-[80vh] w-full bg-[#D3D3D3] rounded-[20px] flex flex-col">
        <div>
          <p className="font-semibold text-[#660708] text-[40px] lg:text-[60px] pl-12 pt-6">
            Our Products
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-10 md:gap-32 lg:gap-0 lg:flex-row">
          <div
            className="group flex flex-col items-center justify-center h-[50vh] w-[80%] lg:w-[22%] bg-black mt-10 lg:absolute lg:left-[10%] 
          z-0 rounded-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full h-full rounded-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
              src="/pen_holder.png"
              alt="Pen Holder"
            />
            <p
              className="lg:absolute lg:bottom-[-50px] text-white text-[40px] opacity-80
        lg:opacity-0 group-hover:opacity-80 group-hover:bottom-0 
        transition-all duration-500 ease-in-out bg-gradient-to-t from-red-400 py-6 to-transparent text-center rounded-2xl w-full"
            >
              Display Stand
            </p>
          </div>

          <div
            className="group flex flex-col items-center justify-center h-[50vh] w-[80%] lg:w-[22%] bg-black mt-10 lg:mt-20 lg:absolute lg:left-[30%] 
          z-10 rounded-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full h-full rounded-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
              src="/BRT.webp"
              alt=""
            />
            <p
              className="lg:absolute lg:bottom-[-50px] text-white text-[40px] opacity-80
        lg:opacity-0 group-hover:opacity-80 group-hover:bottom-0 
        transition-all duration-500 ease-in-out bg-gradient-to-t from-red-400 py-6 to-transparent text-center rounded-2xl w-full"
            >
              BRT Pen
            </p>
          </div>
          <div
            className="group flex flex-col items-center justify-center h-[50vh] w-[80%] lg:w-[22%] bg-black mt-10 lg:absolute lg:left-[50%] 
          z-0 rounded-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full h-full rounded-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
              src="/Pentonic_Gel.webp"
              alt=""
            />
            <p
              className="lg:absolute lg:bottom-[-50px] text-white text-[40px] opacity-80
        lg:opacity-0 group-hover:opacity-80 group-hover:bottom-0 
        transition-all duration-500 ease-in-out bg-gradient-to-t from-red-400 py-6 to-transparent text-center rounded-2xl w-full"
            >
              Pentonic Gel
            </p>
          </div>
          <div
            className="group flex flex-col items-center justify-center h-[50vh] w-[80%] lg:w-[22%] bg-black mt-10 lg:mt-20 lg:absolute lg:left-[70%] 
          z-10 rounded-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          >
            <img
              className="object-cover w-full h-full rounded-2xl group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
              src="/Vibrant.webp"
              alt=""
            />
            <p
              className="lg:absolute lg:bottom-[-50px] text-white text-[40px] opacity-80
        lg:opacity-0 group-hover:opacity-80 group-hover:bottom-0 
        transition-all duration-500 ease-in-out bg-gradient-to-t from-red-400 py-6 to-transparent text-center rounded-2xl w-full"
            >
              Multi Color Stand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
