"use client";

import Image from "next/image";
import React from "react";
import { CheckCircle, Clock } from "lucide-react";
import image1 from "../assets/c4.png";
import image2 from "../assets/c5.png";
const accommodations = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    image: image1 ,
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
    image: image2 ,
    rating: 4.1,
    ratingLabel: "Very Good",
    checkIn: "28.01.2025, 6:00 am",
    checkOut: "30.01.2025, 11:15 am",
    nights: 2,
    status: "Pending",
  },
];

const Accomodation = () => {
  return (
    <div className="px-4 mt-4">
      <h3 className="text-[#333333] dark:text-white font-medium mb-2">Accommodation</h3>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {accommodations.map((item) => (
          <div
            key={item.id}
            className="bg-[#2b2b2b] rounded-xl w-[239px] relative h-[373px]  text-[#333333] dark:text-white flex-shrink-0"
          >
            <div className="relative ">
              <Image
                src={item.image}
                alt={item.name}
                width={700}
                height={700}
                className="rounded-lg w-full object-cover !h-[38vh]"
              />
              <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-medium px-2 py-[2px] rounded-md flex items-center gap-1 z-10">
                <span className="text-xs">⭐</span> {item.rating}{" "}
                {item.ratingLabel}
              </span>
            </div>
            <div className="absolute bottom-3 p-2">
              <h4 className="text-sm font-semibold">{item.name}</h4>

              <p className="text-xs font-medium text-gray-300">
                Check in: <span className="text-white">{item.checkIn}</span>
              </p>
              <p className="text-xs font-medium text-gray-300">
                Check out: <span className="text-white">{item.checkOut}</span>
              </p>

              <div className="mt-2 text-xs flex justify-between items-center">
                <span>{item.nights} Nights</span>

                {item.status === "Confirmed" ? (
                  <span className="flex items-center gap-1 text-green-400">
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
  );
};

export default Accomodation;
