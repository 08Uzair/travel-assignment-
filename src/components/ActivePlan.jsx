import React from "react";
import { ChevronRight } from "lucide-react";
import image1 from "../assets/c1.png";
import image2 from "../assets/c2.png";
import image3 from "../assets/c3.png";
import Image from "next/image";
const ActivePlan = () => {
  const days = [
    { month: "JAN", day: 27, label: "MON", active: true },
    { month: "", day: 28, label: "TUE" },
    { month: "", day: 29, label: "WED" },
    { month: "", day: 30, label: "THU" },
    { month: "", day: 31, label: "FRI" },
    { month: "FEB", day: 1, label: "SAT", dimmed: true },
  ];

  return (
    <div className="px-4 mt-6 font-[Montserrat]">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold text-lg">Activities</h3>
        <button className="text-lime-400 text-sm underline underline-offset-2">
          See all
        </button>
      </div>

      {/* Day Plan Header */}
      <div className="bg-[#2B2B2B] rounded-2xl px-4 py-3 text-white mb-4">
        <div className="flex justify-between items-center mb-3">
          <button className="border border-lime-400 text-lime-400 font-medium text-xs px-3 py-1 rounded-full">
            Day Plan
          </button>
          <span className="border border-lime-400 text-lime-400 text-xs px-3 py-1 rounded-full">
            14 Activities
          </span>
        </div>

        {/* Date Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-2 py-2">
          {days.map((d, i) => (
            <div
              key={i}
              className={`flex items-stretch w-[70px] h-[65px] flex-shrink-0 rounded-xl overflow-hidden ${
                d.active
                  ? "bg-lime-400 text-black "
                  : d.monthOnly
                  ? "bg-gray-400 text-black"
                  : "bg-[#1E1E1E] text-white"
              }`}
            >
              {/* Month (for active or divider item) */}
              {d.month && !d.monthOnly && (
                <div className="flex items-center justify-center text-center px-[3px] bg-lime-500 text-black">
                  <span className="text-[12px] font-semibold text-center transform -rotate-90 origin-mid-left">
                    {d.month}
                  </span>
                </div>
              )}

              {/* Month divider (like "FEB") */}
              {d.monthOnly && (
                <div className="flex items-center justify-center w-full">
                  <span className="text-[12px] font-semibold text-center transform -rotate-90 origin-top-left">
                    {d.month}
                  </span>
                </div>
              )}

              {/* Day + Date section */}
              {!d.monthOnly && (
                <div className="flex flex-col items-center justify-center flex-1 text-center px-1">
                  <span className="text-[11px] font-medium leading-none">
                    {d.label}
                  </span>
                  <span className="text-[15px] font-bold mt-[2px]">
                    {d.day}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Chevron icon to scroll */}
          <div className="ml-1 flex items-center justify-center w-[30px] h-[65px]">
            <ChevronRight className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Day Summary */}
      <div className="mb-4">
        {/* Header Tags */}
        <div className="flex items-center gap-3 mb-4 text-xs font-medium">
          <span className="bg-lime-400 text-black px-3 py-1 rounded-full">
            Day 1
          </span>
          <span className="bg-[#1E1E1E] border border-lime-400 px-3 py-1 rounded-full text-lime-400">
            27.01.2025
          </span>
          <span className="text-lime-400 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-3-3h-2a3 3 0 00-3 3v2h3zM9 20H4v-2a3 3 0 013-3h2a3 3 0 013 3v2H9zm6-9a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            3 Activities
          </span>
        </div>

        {/* Activity Cards */}
        <div className="border border-[#D3F462] p-3 rounded-[8px] space-y-4">
          {[
            {
              title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
              time: "8:15 am Morning",
              duration: "3 hours",
              pickup: "From Hotel",
              img: image1 ,
            },
            {
              title: "Tokyo Sky Tree",
              time: "1:00 pm Afternoon",
              duration: "3 hours",
              pickup: "From Nakamise Street",
              img:  image2 ,
            },
            {
              title: "Kimono Wearing",
              time: "Anytime before 8:00pm",
              duration: "1–2 hours",
              pickup: "From Hotel",
              img: image3 ,
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="flex bg-[#2B2B2B] rounded-[8px] overflow-hidden"
            >
              {/* Left: Image */}
              <Image
                src={activity.img}
                width={500}
                height={500}
                alt={activity.title}
                className="w-[127px] h-[127px] object-cover rounded-l-2xl"
              />

              {/* Right: Content */}
              <div className="p-3 flex flex-col justify-center w-full">
                <h4 className="font-semibold text-white text-sm mb-1">
                  {activity.title}
                </h4>
                <p className="text-xs text-gray-300">
                  <span className="font-medium text-white">Timing:</span>{" "}
                  {activity.time}
                </p>
                <p className="text-xs text-gray-300">
                  <span className="font-medium text-white">Duration:</span>{" "}
                  {activity.duration}
                </p>
                <p className="text-xs text-gray-300">
                  <span className="font-medium text-white">Pick up:</span>{" "}
                  {activity.pickup}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivePlan;
