"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import MobileNavbar from "@/components/MobileNavbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose only what you need
  variable: "--font-montserrat", // optional for custom usage
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} w-[375px] transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
        <MobileNavbar />
      </body>
    </html>
  );
}
