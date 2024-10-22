import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div
      className="bg-[#28183c] text-white pt-6 pb-6 px-5 rounded-md"
      data-aos="fade-up"
    >
      <h2 className="text-2xl md:text-3xl font-bold">Eligible to Stake</h2>
      <p className="mt-2 text-sm md:text-base lg:text-lg">
        You cannot stake if you have an active unstake/withdrawal request
      </p>
    </div>
  );
};

export default Footer;
