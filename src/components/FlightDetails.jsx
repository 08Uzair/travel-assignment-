import React from "react";
import Image from "next/image";
import flight from "../assets/plane.png";
import arr from "../assets/arr.png";
const FlightDetails = () => {
  return (
    <div className="px-4 mt-4 relative overflow-hidden">
      <div className="bg-blue-800 rounded-xl  text-white">
        <div className="flex justify-between items-center mb-2 pl-2 pt-2">
          <p className="text-white font-medium">Flight Details</p>
          <button className="text-white underline cursor-pointer text-[10px] font-extrabold  pr-2">
            See all
          </button>
        </div>
        <p className="text-sm mb-2 pl-2">26.01.2025, 10:50 am</p>
        <div className="flex items-center justify-between">
          <div className="pl-2">
            <h4 className="font-bold">DEL</h4>
            <p className="text-xs text-gray-200">Delhi, India</p>
          </div>
          <Image
            src={arr}
            width={30}
            height={30}
            alt="flight"
            className="  mx-2 "
          />
          <div>
            <h4 className="font-bold">NRT</h4>
            <p className="text-xs text-gray-200">Narita, Tokyo</p>
          </div>
          <Image
            src={flight}
            width={900}
            height={900}
            alt="flight"
            className=" w-[100%] mx-2 relative right-[-0.45rem] bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
