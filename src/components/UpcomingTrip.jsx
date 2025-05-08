import React from "react";
import Image from "next/image";
import tok from "../assets/tok.jpeg";
import { Clock, Users, List } from "lucide-react";

const UpcomingTrip = () => {
  return (
    <div className="px-4 max-w-sm mx-auto">
      <p className="text-sm text-gray-400 mb-1">Your Upcoming Trip</p>
      <div className="relative rounded-xl overflow-hidden shadow-lg ">
        {/* Image */}
        <Image
          src={tok}
          alt="Tokyo"
          width={562}
          height={642}
          className="w-full h-[360px] object-cover"
        />

        {/* Top Left Text */}
        <div className="absolute top-4 left-4 text-white">
          <h3 className="text-[40px] font-black tracking-wide">TOKYO</h3>
          <p className="text-sm font-light">27.01.2025 - 02.02.2025</p>
        </div>

        {/* Top Right Arrow */}
        <div className="absolute top-4 right-4 text-white text-lg">↗</div>

        {/* Bottom Info Row */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs">
          {/* Duration */}
          <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-full">
            <Clock size={16} className="text-lime-400" />
            <div>
              <p className=" text-[12px] font-semibold">8 Days</p>
              <p className="text-[10px] font-normal text-gray-200">Duration</p>
            </div>
          </div>

          {/* Group Size */}
          <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-full">
            <Users size={16} className="text-lime-400" />
            <div>
              <p className="font-semibold text-[12px]">4 (2M,2F)</p>
              <p className="text-[10px] font-normal text-gray-200">Group Size</p>
            </div>
          </div>

          {/* Activities */}
          <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-full">
            <List size={16} className="text-lime-400" />
            <div>
              <p className="font-semibold text-[12px]">14</p>
              <p className="text-[10px] font-normal text-gray-200">Activities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTrip;
