"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      w-full fixed top-0 left-0 z-50 
      bg-[#3FA9F5]/90 backdrop-blur-md 
      text-[#DAEB2B] shadow-lg
    ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO ⟶ CLICABLE */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_ondina.png"
            alt="Logo"
            width={80}
            height={80}
            className="cursor-pointer transition-transform hover:scale-105"
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 font-semibold text-lg items-center">
          {[
            { name: "Inicio", href: "/" },
            { name: "Productos", href: "/productos" },
            { name: "Contacto", href: "/contacto" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                  relative transition-colors 
                  hover:text-white
                "
              >
                {item.name}

                {/* Subrayado animado */}
                <span className="
                  absolute left-0 -bottom-1 
                  h-[2px] w-0 bg-white 
                  transition-all duration-300 
                  group-hover:w-full
                "></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER ANIMADO */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-8 bg-[#DAEB2B] rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-8 bg-[#DAEB2B] rounded mt-2 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`
          md:hidden bg-[#3FA9F5] text-[#DAEB2B] 
          transition-all duration-300 overflow-hidden 
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
          {[
            { name: "Inicio", href: "/" },
            { name: "Productos", href: "/productos" },
            { name: "Contacto", href: "/contacto" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors text-xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
