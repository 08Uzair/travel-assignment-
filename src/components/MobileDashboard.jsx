"use client";
import { useState } from "react";
import Image from "next/image";
import arr from "../assets/arr.png";
import tok from "../assets/tok.jpeg";
import image1 from "../assets/c1.png";
import image2 from "../assets/c2.png";
import image3 from "../assets/c3.png";
import image4 from "../assets/c4.png";
import image5 from "../assets/c5.png";
import flight from "../assets/plane.png";
import { Clock, Users, List, CheckCircle, ChevronRight } from "lucide-react";

const accommodations = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    image: image4,
    rating: 4.0,
    ratingLabel: "Very Good",
    checkIn: "26.01.2025, 11:15 pm",
    checkOut: "28.01.2025, 11:15 am",
    nights: 2,
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Mercure Tokyo Hotel",
    image: image5,
    rating: 4.1,
    ratingLabel: "Very Good",
    checkIn: "28.01.2025, 6:00 am",
    checkOut: "30.01.2025, 11:15 am",
    nights: 2,
    status: "Pending",
  },
];

export default function MobileDashboard({ userName = "Chhavi" }) {
  const days = [
    { month: "JAN", day: 27, label: "MON", active: true },
    { month: "", day: 28, label: "TUE" },
    { month: "", day: 29, label: "WED" },
    { month: "", day: 30, label: "THU" },
    { month: "", day: 31, label: "FRI" },
    { month: "FEB", day: 1, label: "SAT", dimmed: true },
  ];

  const [isActive, setIsActive] = useState(() => {
    try {
      const modeData = JSON.parse(localStorage.getItem("mode"));
      return typeof modeData === "boolean" ? modeData : false;
    } catch {
      return false;
    }
  });

  const toggle = () => {
    setIsActive((prev) => {
      const newValue = !prev;
      localStorage.setItem("mode", JSON.stringify(newValue));
      return newValue;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`${
        isActive ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen pb-20`}
    >
      {/* TRIP HEADER */}
      <div className="flex justify-between items-center px-4 py-3 relative">
        <div>
          <h2
            className={`${
              isActive ? "text-black" : "text-white"
            } font-semibold text-lg`}
          >
            Hello {userName}!
          </h2>
          <p
            className={`${
              isActive ? "text-gray-600" : "text-gray-400"
            } text-sm`}
          >
            Ready for the trip?
          </p>
        </div>

        {/* Dark/Light Mode Toggle */}
        <div
          onClick={toggle}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-pressed={isActive}
          aria-label={isActive ? "Switch to dark mode" : "Switch to light mode"}
          className={`p-2 m-2 rounded-full w-[12%] absolute right-[3.5rem] border-2 cursor-pointer ${
            isActive ? "border-gray-400" : "border-gray-700"
          }`}
        >
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0, 0, 0, 0.85)"
            >
              <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(243, 236, 236, 1)"
            >
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
            </svg>
          )}
        </div>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            isActive ? "bg-orange-500 text-white" : "bg-orange-700 text-white"
          }`}
        >
          C
        </div>
      </div>

      {/* UPCOMING TRIP */}
      <div className="px-4 max-w-sm mx-auto">
        <p
          className={`${
            isActive ? "text-gray-600" : "text-gray-400"
          } text-sm mb-1`}
        >
          Your Upcoming Trip
        </p>
        <div
          className={`relative rounded-xl overflow-hidden shadow-lg ${
            isActive ? "" : "bg-[#1E1E1E]"
          }`}
        >
          {/* Image */}
          <Image
            src={tok}
            alt="Tokyo"
            width={562}
            height={642}
            className="w-[353px] h-[360px] object-cover"
          />

          {/* Top Left Text */}
          <div
            className="absolute top-4 left-4"
            style={{ color: isActive ? "black" : "white" }}
          >
            <h3 className="text-[40px] font-black tracking-wide">TOKYO</h3>
            <p
              className={`text-sm font-light" ${isActive ? "black" : "white"}`}
            >
              27.01.2025 - 02.02.2025
            </p>
          </div>

          {/* Top Right Arrow */}
          <div
            className="absolute top-4 right-4 text-lg"
            style={{ color: isActive ? "black" : "white" }}
          >
            ↗
          </div>

          {/* Bottom Info Row */}
          <div
            className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs"
            style={{ color: isActive ? "black" : "white" }}
          >
            {/* Duration */}
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                isActive ? "bg-gray-200" : "bg-black/60"
              }`}
            >
              <Clock
                size={16}
                className={` ${isActive ? "text-[#313DDF]" : "text-lime-400 "}`}
              />
              <div>
                <p className="text-[12px] font-semibold">8 Days</p>
                <p className="text-[10px] font-normal text-gray-500">
                  Duration
                </p>
              </div>
            </div>

            {/* Group Size */}
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                isActive ? "bg-gray-200" : "bg-black/60"
              }`}
            >
              <Users size={16}  className={` ${isActive ? "text-[#313DDF]" : "text-lime-400 "}`} />
              <div>
                <p className="font-semibold text-[12px]">4 (2M,2F)</p>
                <p className="text-[10px] font-normal text-gray-500">
                  Group Size
                </p>
              </div>
            </div>

            {/* Activities */}
            <div
              className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                isActive ? "bg-gray-200" : "bg-black/60"
              }`}
            >
              <List size={16}   className={` ${isActive ? "text-[#313DDF]" : "text-lime-400 "}`}/>
              <div>
                <p className="font-semibold text-[12px]">14</p>
                <p className="text-[10px] font-normal text-gray-500">
                  Activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLIGHT DETAILS */}
      <div className="px-4 mt-4 relative overflow-hidden">
        <div
          className={`rounded-xl ${
            isActive ? "bg-blue-200 text-black" : "bg-blue-800 text-white"
          }`}
        >
          <div className="flex justify-between items-center mb-2 pl-2 pt-2">
            <p className="font-medium">Flight Details</p>
            <button
              className={`underline cursor-pointer text-[10px] font-extrabold pr-2 ${
                isActive ? "text-blue-800" : "text-white"
              }`}
            >
              See all
            </button>
          </div>
          <p className="text-sm mb-2 pl-2">
            {isActive ? "text-black" : "text-gray-200"}
          </p>
          <p className="text-sm mb-2 pl-2">26.01.2025, 10:50 am</p>
          <div className="flex items-center justify-between">
            <div className="pl-2">
              <h4
                className={`font-bold ${
                  isActive ? "text-black" : "text-white"
                }`}
              >
                DEL
              </h4>
              <p
                className={
                  isActive ? "text-gray-700 text-xs" : "text-gray-200 text-xs"
                }
              >
                Delhi, India
              </p>
            </div>
            <Image
              src={arr}
              width={30}
              height={30}
              alt="flight"
              className="mx-2"
            />
            <div>
              <h4
                className={`font-bold ${
                  isActive ? "text-black" : "text-white"
                }`}
              >
                NRT
              </h4>
              <p
                className={
                  isActive ? "text-gray-700 text-xs" : "text-gray-200 text-xs"
                }
              >
                Narita, Tokyo
              </p>
            </div>
            <Image
              src={flight}
              width={900}
              height={900}
              alt="flight"
              className="w-[100%] mx-2 relative right-5 bottom-0"
            />
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div className="px-4 mt-4">
        <h3
          className={`${
            isActive ? "text-black" : "text-white"
          } font-medium mb-2`}
        >
          Accommodation
        </h3>
        <div className="flex gap-4 overflow-x-scroll no-scrollbar">
          {accommodations.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl w-[239px] relative h-[373px] flex-shrink-0 ${
                isActive ? "bg-gray-100 text-black" : "bg-[#2b2b2b] text-white"
              }`}
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={700}
                  className="rounded-lg w-full object-cover !h-[35vh]"
                />
                <span
                  className={`absolute top-2 left-2 text-[10px] font-medium px-2 py-[2px] rounded-md flex items-center gap-1 z-10 ${
                    isActive
                      ? "bg-blue-400 text-black"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <span className="text-xs">⭐</span> {item.rating}{" "}
                  {item.ratingLabel}
                </span>
              </div>
              <div className="absolute bottom-3 p-2">
                <h4
                  className={`text-sm font-semibold ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {item.name}
                </h4>

                <p
                  className={`text-xs font-medium ${
                    isActive ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Check in:{" "}
                  <span className={isActive ? "text-black" : "text-white"}>
                    {item.checkIn}
                  </span>
                </p>
                <p
                  className={`text-xs font-medium ${
                    isActive ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  Check out:{" "}
                  <span className={isActive ? "text-black" : "text-white"}>
                    {item.checkOut}
                  </span>
                </p>

                <div className="mt-2 text-xs flex justify-between items-center">
                  <span className={isActive ? "text-black" : "text-white"}>
                    {item.nights} Nights
                  </span>

                  {item.status === "Confirmed" ? (
                    <span className="flex items-center gap-1 text-green-500">
                      <CheckCircle size={14} /> {item.status}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-orange-400">
                      <Clock size={14} /> {item.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Plans & Day Summary */}
      <div className="px-4 mt-6 font-[Montserrat]">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h3
            className={`${
              isActive ? "text-black" : "text-white"
            } font-semibold text-lg`}
          >
            Activities
          </h3>
          <button
            className={`${
              isActive ? "text-[#313DDF]" : "text-lime-400"
            } text-sm underline underline-offset-2`}
          >
            See all
          </button>
        </div>

        {/* Day Plan Header */}
        <div
          className={`rounded-2xl px-4 py-3 mb-4 ${
            isActive ? "bg-gray-200 text-black" : "bg-[#2B2B2B] text-white"
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <button
              className={`border font-medium text-xs px-3 py-1 rounded-full ${
                isActive
                  ? "border-[#313DDF] text-[#313DDF]"
                  : "border-lime-400 text-lime-400"
              }`}
            >
              Day Plan
            </button>
            <span
              className={`border text-xs px-3 py-1 rounded-full ${
                isActive
                  ? "border-[#313DDF] text-[#313DDF]"
                  : "border-lime-400 text-lime-400"
              }`}
            >
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
                    ? ` ${
                        isActive ? "bg-[#313DDF]" : "bg-lime-400 "
                      }   text-white`
                    : d.monthOnly
                    ? "bg-gray-400 text-black"
                    : isActive
                    ? "bg-gray-300 text-black"
                    : "bg-[#1E1E1E] text-white"
                }`}
              >
                {/* Month (for active or divider item) */}
                {d.month && !d.monthOnly && (
                  <div
                    className={`flex items-center justify-center text-center px-[3px] ${
                      isActive ? "bg-[#313DDF]" : "bg-lime-400 "
                    }  text-white`}
                  >
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
              <ChevronRight
                className={isActive ? "text-gray-600" : "text-gray-500"}
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Day Summary */}
        <div className="mb-4">
          {/* Header Tags */}
          <div className="flex items-center gap-3 mb-4 text-xs font-medium">
            <span
              className={` ${
                isActive ? "bg-[#313DDF]" : "bg-lime-400 "
              }  text-white px-3 py-1 rounded-full`}
            >
              Day 1
            </span>
            <span
              className={`border px-3 py-1 rounded-full ${
                isActive
                  ? "border-[#313DDF] text-[#313DDF]"
                  : "border-lime-400 text-lime-400"
              }`}
            >
              27.01.2025
            </span>
            <span
              className={`${
                isActive ? "text-[#313DDF]" : "text-lime-400"
              } flex items-center gap-1`}
            >
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
          <div
            className={`border p-3 rounded-[8px] space-y-4 ${
              isActive
                ? "border-[#313DDF]  text-black"
                : "border-[#D3F462]  text-white"
            }`}
          >
            {[
              {
                title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
                time: "8:15 am Morning",
                duration: "3 hours",
                pickup: "From Hotel",
                img: image1,
              },
              {
                title: "Tokyo Sky Tree",
                time: "1:00 pm Afternoon",
                duration: "3 hours",
                pickup: "From Nakamise Street",
                img: image2,
              },
              {
                title: "Kimono Wearing",
                time: "Anytime before 8:00pm",
                duration: "1–2 hours",
                pickup: "From Hotel",
                img: image3,
              },
            ].map((activity, i) => (
              <div
                key={i}
                className={`flex rounded-[8px] overflow-hidden ${
                  isActive ? "bg-gray-200" : "bg-[#2B2B2B]"
                }`}
              >
                {/* Left: Image */}
                <Image
                  src={activity.img}
                  width={500}
                  height={500}
                  alt={activity.title}
                  className="w-[120px] h-[100px] object-cover rounded-l-[8px]"
                />
                {/* Right: Text */}
                <div className="p-3 flex flex-col justify-between">
                  <h4
                    className={`${
                      isActive ? "text-black" : "text-white"
                    } font-semibold text-sm`}
                  >
                    {activity.title}
                  </h4>
                  <p
                    className={`${
                      isActive ? "text-gray-700" : "text-gray-300"
                    } text-xs`}
                  >
                    {activity.time} · {activity.duration}
                  </p>
                  <p
                    className={`${
                      isActive ? "text-gray-700" : "text-gray-300"
                    } text-xs`}
                  >
                    Pickup: {activity.pickup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
