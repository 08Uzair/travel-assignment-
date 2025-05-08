"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import "../globals.css";

const travelGroups = [
  { label: "Solo", icon: Users },
  { label: "Couple", icon: Users },
  { label: "Family", icon: Users },
  { label: "Friends", icon: Users },
];

export default function TravelPlanner() {
  const [isActive, setIsActive] = useState(() => {
    try {
      const modeData = JSON.parse(localStorage.getItem("mode"));
      return typeof modeData === "boolean" ? modeData : false;
    } catch {
      return false;
    }
  });

  const [selectedGroup, setSelectedGroup] = useState("Solo");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual logic
    console.log({ destination, duration, selectedGroup });
  };

  const toggle = () => {
    setIsActive((prev) => {
      const newValue = !prev;
      localStorage.setItem("mode", JSON.stringify(newValue));
      return newValue;
    });
  };

  // Accessibility: handle keyboard toggle (Enter/Space)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center w-full h-screen flex-col overflow-hidden"
        style={{ backgroundColor: !isActive ? "#222" : "#f5f5f5" }}
      >
        <div
          className="h-screen w-[393px] flex justify-center px-4"
          style={{
            backgroundColor: !isActive ? "#0f0b0e" : "#fff",
            color: !isActive ? "#fff" : "#000",
            position: "relative",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-[393px] space-y-6 relative top-[79px]"
            aria-label="Travel Planner Form"
          >
            {/* Dark/Light Mode Toggle */}
            <div
              onClick={toggle}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={
                !isActive ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`p-2 m-2 rounded-full w-[12%] absolute top-[-4.5rem] right-0 border-2 cursor-pointer ${
                !isActive ? "border-gray-200" : "border-black"
              }`}
            >
              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="rgba( 0, 0, 0, 0.85)"
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

            <header>
              <h1 className="text-[23px] font-bold">
                Plan Your Journey, Your Way!
              </h1>
              <p
                className="text-sm mt-1"
                style={{ color: !isActive ? "#aaa" : "#666" }}
              >
                Let’s create your personalised travel experience
              </p>
            </header>

            {/* Destination Input */}
            <div>
              <label
                htmlFor="destination"
                className="block text-sm mb-1 font-medium"
                style={{ color: !isActive ? "#ddd" : "#333" }}
              >
                Where would you like to go?
              </label>
              <div
                className="flex items-center rounded-lg px-3 py-2"
                style={{ backgroundColor: !isActive ? "#333333" : "#e5e5e5" }}
              >
                <MapPin
                  className="w-4 h-4 mr-2"
                  style={{ color: !isActive ? "#888" : "#666" }}
                />
                <input
                  id="destination"
                  type="text"
                  placeholder="Enter Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent w-full focus:outline-none text-sm"
                  required
                  style={{ color: !isActive ? "#fff" : "#000" }}
                />
              </div>
            </div>

            {/* Duration Dropdown */}
            <div>
              <label
                htmlFor="duration"
                className="block text-sm mb-1 font-medium"
                style={{ color: !isActive ? "#ddd" : "#333" }}
              >
                How long will you stay?
              </label>
              <div
                className="flex items-center rounded-lg px-3 py-2"
                style={{ backgroundColor: !isActive ? "#333333" : "#e5e5e5" }}
              >
                <Calendar
                  className="w-4 h-4 mr-2"
                  style={{ color: !isActive ? "#888" : "#666" }}
                />
                <select
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="bg-transparent w-full outline-none focus:outline-none text-sm cursor-pointer"
                  required
                  style={{ color: !isActive ? "#fff" : "#000" }}
                >
                  <option value="" disabled>
                    Select Duration
                  </option>
                  <option value="1-3 Days">1-3 Days</option>
                  <option value="1 Week">1 Week</option>
                  <option value="2+ Weeks">2+ Weeks</option>
                </select>
              </div>
            </div>

            {/* Travel Group Selection */}
            <div>
              <p
                className="block text-sm mb-2 font-medium"
                style={{ color: !isActive ? "#ddd" : "#333" }}
              >
                Who are you traveling with?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {travelGroups.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedGroup(label)}
                    className={`flex items-center justify-center px-4 py-2 rounded-lg border transition cursor-pointer
                  ${
                    selectedGroup === label
                      ? "border-green-500 bg-gray-700"
                      : !isActive
                      ? "border-transparent bg-[#333333]"
                      : "border-transparent bg-[#e5e5e5]"
                  }`}
                    aria-pressed={selectedGroup === label}
                    style={{
                      color:
                        selectedGroup === label
                          ? "#fff"
                          : !isActive
                          ? "#ddd"
                          : "#000",
                    }}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3643fb] cursor-pointer  absolute bottom-[9.5rem] text-white font-semibold py-3 rounded-xl text-sm"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
