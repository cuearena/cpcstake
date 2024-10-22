import React from "react";
import logo from "../assets/logo.png";

function NavbarSection() {
  return (
    <div className="w-full bg-white shadow-md p-0">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:px-6">
        <div className="flex items-center">
          <img src={logo} alt="website logo" className="w-40 sm:w-48 mr-2" />
        </div>
        <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <button className="bg-[#28183c] border border-[#28183c] rounded-md px-4 py-2 text-sm sm:text-base text-white">
            Buy Token
          </button>
          <w3m-button />
        </div>
      </div>
    </div>
  );
}

export default NavbarSection;
