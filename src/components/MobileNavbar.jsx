"use client";
import { useState } from "react";
import { Home, Search, Plus, Heart, User } from "lucide-react";
import Link from "next/link";

const tabs = [
  { id: "home", icon: Home, link: "/" },
  { id: "search", icon: Search, link: "" },
  { id: "create", icon: Plus, link: "/boarding" },
  { id: "favorites", icon: Heart, link: "" },
  { id: "profile", icon: User, link: "" },
];

export default function MobileNavbar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-[375px] fixed bottom-0 left-0 right-0 z-50 bg-black px-6 py-3 border-t border-neutral-800 flex justify-between items-center">
      {tabs.map(({ id, icon: Icon, link }) => (
        <Link key={id} href={link}>
          <button
            
            onClick={() => setActiveTab(id)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              activeTab === id
                ? "bg-lime-500/20 text-lime-400"
                : "text-gray-400"
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        </Link>
      ))}
    </div>
  );
}
