import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import bar from "../assets/bar.png";
import BarGroup from "../assets/BarGroup.png";

const CardSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration
    });
  }, []);

  return (
    <div className="container mx-auto py-8 px-5 bg-[#28183c]">
      <div className="flex flex-wrap">
        {/* First Section */}
        <div className="w-full md:w-4/12 px-4" data-aos="fade-up">
          <div className="flex items-center justify-evenly">
            <div className="mr-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Total Value Locked:
              </h2>
              <p className="text-sm text-white">$7,868,163.54</p>
            </div>
            <img
              src={BarGroup}
              alt="Total Value Locked"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div
          className="w-full md:w-4/12 px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center justify-evenly">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Apy:</h2>
              <p className="text-sm text-white">158.50%</p>
            </div>
            <img
              src={BarGroup}
              alt="Apy"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div
          className="w-full md:w-4/12 px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center justify-evenly">
            <div className="mr-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Number of Stakers
              </h2>
              <p className="text-sm text-white">5699</p>
            </div>
            <img
              src={bar}
              alt="Number of Stakers"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
