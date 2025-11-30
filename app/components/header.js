"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      
      
      <div
        className="bg-[#c7a268] text-sm flex flex-col md:flex-row 
        md:justify-between items-center
        px-4 md:px-8 py-2 space-y-1 md:space-y-0"
      >
        <div className="text-center md:text-left">
          Phone: <span className="font-medium">+12345678</span> |{" "}
          <span className="font-medium">Email : food@restan.com</span>
        </div>
        <div>English</div>
      </div>

      
      <header
        className="flex justify-between items-center px-10 py-4
       bg-black border-b border-gray-800 relative"
      >
        
        <h1 className="w-20">
          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
            alt="logo"
          />
        </h1>

        
        <nav className="space-x-20 hidden md:block">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400">
            Pages
          </Link>
          <Link href="/blog" className="hover:text-amber-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-amber-400">
            Contact
          </Link>
        </nav>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl z-50"
        >
          {open ? "✕" : "☰"}
        </button>

        
        <button className="border hover:text-amber-400 px-4 py-2 rounded hidden md:block">
          Reservation
        </button>
      </header>

      
      {open && (
        <div className="md:hidden bg-black w-full px-10 py-4 space-y-4 shadow-lg border-t border-gray-700 animate-slideDown">
          <Link href="/" className="block hover:text-amber-400">
            Home
          </Link>
          <Link href="/about" className="block hover:text-amber-400">
            Pages
          </Link>
          <Link href="/blog" className="block hover:text-amber-400">
            Blog
          </Link>
          <Link href="/contact" className="block hover:text-amber-400">
            Contact
          </Link>

          <button className="border hover:text-amber-400 px-4 py-2 rounded w-full text-left">
            Reservation
          </button>
        </div>
      )}
    </div>
  );
}
