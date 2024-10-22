import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function FormSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mt-12 mb-12 sm:mt-20 text-white">
      {/* Left Card */}
      <div
        className="bg-[#28183c] flex flex-col justify-between border border-white rounded-2xl w-full p-6 h-auto sm:h-[560px]"
        data-aos="fade-up"
      >
        <div>
          <h3 className="text-2xl sm:text-5xl font-bold">Total Staked</h3>
          <h4 className="text-lg sm:text-2xl font-bold">
            18878573.851548 $CPC
          </h4>
          <div className="mt-4 sm:mt-6 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm sm:text-base">
              <span>My Balance: 0</span>
              <span>Reward</span>
            </div>
            <div className="flex justify-between items-center text-sm sm:text-base">
              <span>My Balance: 0</span>
              <span>Dynamic</span>
            </div>
            <span className="text-sm sm:text-base">Locked Deadline: --</span>
            <span className="text-sm sm:text-base">Early Unstake Fee: 5%</span>
          </div>
          <hr className="w-full border-2 sm:border-4 rounded-md border-[#ede8f3] my-4 sm:my-6" />
          <label
            htmlFor="range"
            className="border border-white rounded-md flex justify-between items-center px-2 sm:px-4"
          >
            <input
              type="number"
              name="range"
              id="range"
              placeholder="0.00"
              className="bg-transparent w-full text-base py-1 focus:outline-none remove-input-arrows text-white"
            />
            <button className="bg-white rounded text-slate-950 px-2 text-sm sm:text-base">
              Max
            </button>
          </label>
          <div className="mt-4 sm:mt-6 flex justify-between items-center">
            <button className="flex justify-center items-center gap-2 font-cosmic text-sm sm:text-base bg-[#28183c] shadow-lg shadow-slate-700 text-white font-bold py-2 sm:py-3 rounded-lg w-full">
              Approve
            </button>
            <button className="flex justify-center items-center gap-2 font-cosmic text-sm sm:text-base bg-[#28183c] shadow-lg shadow-slate-700 text-white font-bold py-2 sm:py-3 rounded-lg w-full">
              Stake
            </button>
          </div>
          <div className="mt-4 sm:mt-6 flex justify-between items-center">
            <button className="flex justify-center items-center gap-2 font-cosmic text-sm sm:text-base bg-[#28183c] shadow-lg shadow-slate-700 text-white font-bold py-2 sm:py-3 rounded-lg w-full">
              Unstake
            </button>
          </div>
        </div>
      </div>

      {/* Middle Text Column */}
      <div
        className="flex flex-col justify-center gap-6 mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* First Card */}
        <div className="border border-white rounded-lg bg-[#28183c] p-6 w-full shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Connected MetaMask</h3>
          <p className="text-lg">
            If not connected, click the "Connect Wallet" button in the top right
            corner
          </p>
        </div>

        {/* Second Card */}
        <div
          className="border border-white rounded-lg bg-[#28183c] p-6 w-full shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-2xl font-bold mb-4">Available Balance</h3>
          <p className="text-lg">
            Current Balance: 38.00 You must have balance in wallet
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div
        className="bg-[#28183c] flex flex-col justify-between border border-white rounded-2xl w-full p-6 h-auto sm:h-[560px]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="mt-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">CPC Rewards</h3>
          <label
            htmlFor="CPC-claim"
            className="border border-white rounded-md flex justify-between items-center px-2 sm:px-4"
          >
            <input
              type="number"
              name="CPC-claim"
              id="CPC-claim"
              placeholder="100 CPC"
              className="bg-transparent w-full text-base py-1 focus:outline-none remove-input-arrows text-white"
            />
            <button className="bg-[#28183c] rounded text-white px-4 text-sm sm:text-base">
              Claim
            </button>
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full bg-[#28183c] rounded-md text-center py-2 shadow-lg shadow-slate-700">
            <p className="text-sm sm:text-base font-semibold">
              Total ETH Claimed
            </p>
            <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
          </div>
          <div className="w-full bg-[#28183c] rounded-md text-center py-2 shadow-lg shadow-slate-700">
            <p className="text-sm sm:text-base font-semibold">
              Total CPC Claimed
            </p>
            <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
          </div>
          <div className="w-full bg-[#28183c] rounded-md text-center py-2 shadow-lg shadow-slate-700">
            <p className="text-sm sm:text-base font-semibold">
              Total Rewards Claimed
            </p>
            <h4 className="font-cosmic text-2xl sm:text-4xl">100</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
