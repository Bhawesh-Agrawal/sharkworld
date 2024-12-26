import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
export default function About() {
  return (
    <div className="flex flex-col w-[90%]">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-start justify-between">
        {/* Text Content */}
        <div className="w-full lg:w-[65%]">
          <div className="flex flex-col items-start justify-start w-full mt-10">
            <div className="w-full flex flex-col">
              <p className="text-white font-bold text-[30px]">
                Welcome to Shark Enterprises,
              </p>
              <p className="text-white text-[20px] mt-10">
                <span className="font-semibold text-red-400">
                  Welcome to Shark Enterprises Pvt Ltd,
                </span>{" "}
                your premier destination for top-quality stationery products in
                Nepal. We are dedicated to bringing you the finest stationery
                items from around the world, ensuring that you have access to
                the best tools for your{" "}
                <span className="font-semibold text-red-400">
                  creative, academic,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-red-400">
                  professional needs.
                </span>{" "}
              </p>
              <p className="text-white text-[30px] font-bold mt-10">About Us</p>
              <p className="text-white text-[20px] mt-10">
                At{" "}
                <span className="font-semibold text-red-400">
                  Shark Enterprises Pvt Ltd
                </span>
                , we pride ourselves on our commitment to excellence and
                customer satisfaction. Established with a vision to bridge the
                gap between{" "}
                <span className="font-semibold text-red-400">
                  global manufacturers
                </span>{" "}
                and{" "}
                <span className="font-semibold text-red-400">
                  local consumers
                </span>
                , we specialize in importing a wide range of{" "}
                <span className="font-semibold text-red-400">high-quality</span>{" "}
                stationery items. From essential office supplies to{" "}
                <span className="font-semibold text-red-400">unique</span> and
                <span className="font-semibold text-red-400">
                  {" "}
                  innovative
                </span>{" "}
                products, our extensive catalogue is designed to meet the
                diverse needs of our customers.{" "}
              </p>
              <p className="text-white text-[30px] font-bold mt-10">
                Our Products
              </p>
              <p className="text-white text-[25px] font-semibold mt-10">
                Our carefully curated selection includes:{" "}
              </p>
              <ul className="text-white text-[20px] mt-10 list-disc pl-10">
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Writing Instruments:
                  </span>{" "}
                  Pens, pencils, markers, and more from leading brands.
                </li>
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Office Supplies:
                  </span>{" "}
                  Staplers, organizational tools
                </li>
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    School Supplies:
                  </span>{" "}
                  Everything students need for a successful academic year.{" "}
                </li>
              </ul>
              <p className="text-white text-[30px] font-bold mt-10">
                Why Choose Us?
              </p>
              <ul className="text-white text-[20px] mt-10 list-disc pl-10">
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Quality Assurance:
                  </span>{" "}
                  We source our products from trusted manufacturers to ensure
                  the highest standards of quality.
                </li>
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Competitive Pricing:
                  </span>{" "}
                  Our global partnerships allow us to offer competitive prices
                  on all our products.
                </li>
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Customer Service:
                  </span>{" "}
                  Our dedicated team is always here to assist you with any
                  inquiries or special requests.
                </li>
                <li className="mt-5">
                  <span className="font-semibold text-red-400">
                    Convenience:
                  </span>{" "}
                  With our comprehensive catalogue, you can find everything you
                  need in one place.
                </li>
              </ul>
              <p className="text-white text-[30px] font-bold mt-10">
                Our Mission
              </p>
              <p className="text-white text-[20px] mt-10">
                Our mission is to enhance the everyday experiences of students
                and professionals by providing them with superior stationery
                products. We believe that the right tools can inspire
                creativity, improve productivity, and bring joy to everyday
                tasks.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[30%] flex flex-col relative gap-5 mt-10 mb-10 lg:mb-0 lg:mt-0">
          <img
            src="/office 1.jpg"
            alt="Office 1"
            className="w-full lg:w-[80%] relative lg:left-[-20px] rounded-md"
          />
          <img
            src="/office building.jpg"
            alt="Office Building"
            className="w-full lg:w-[80%] relative lg:right-[-40px] Lg:top-[-80px] rounded-md"
          />
          <img
            src="/office 2.jpg"
            alt="Office 2"
            className="w-full lg:w-[80%] relative lg:left-[-60px] lg:top-[-160px] rounded-md"
          />
          <img
            src="/office 3.jpg"
            alt="Office 3"
            className="w-full lg:w-[80%] relative lg:right-[-80px] lg:top-[-260px] rounded-md"
          />
        </div>
      </div>
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-[90%] mx-auto mt-10">
        <div className="text-white text-[60px] font-bold text-center">
          Contact <span className="font-bold text-red-400">Us</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col gap-10 w-full lg:w-[45%]">
            {/* Address */}
            <div className="flex flex-row gap-5 items-center">
              <AddLocationAltIcon className="text-red-500 text-[30px]" />
              <p className="text-[20px] text-gray-300">
                Aside Morning Glory School, M8W5+HMP, Sungabha Marg, Bhotebahal,
                Ward No.11, Kathmandu, Nepal, 44600
              </p>
            </div>
            {/* Phone */}
            <div className="flex flex-row gap-5 items-center">
              <LocalPhoneIcon className="text-green-500 text-[30px]" />
              <p className="text-[20px] text-gray-300">+977 9851033462</p>
            </div>
            {/* Email */}
            <div className="flex flex-row gap-5 items-center">
              <MailIcon className="text-blue-500 text-[30px]" />
              <p className="text-[20px] text-gray-300">
                sharkenterprises2021@gmail.com
              </p>
            </div>
            {/* Website */}
            <div className="flex flex-row gap-5 items-center">
              <TravelExploreIcon className="text-purple-500 text-[30px]" />
              <p className="text-[20px] text-gray-300">
                www.sharkworld.bhaweshagrawal.com.np
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-[50%] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371.3267030319606!2d85.30954727943208!3d27.696442454322142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1853cda7b55f%3A0xb9467593b6ce578c!2sMorning%20Glory%20High%20School!5e0!3m2!1sen!2snp!4v1735193420506!5m2!1sen!2snp"
              className="w-full h-[400px] rounded-lg shadow-md"
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-30 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
