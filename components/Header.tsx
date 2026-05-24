"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, LayoutGrid } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "장치 비전", href: "#vision" },
    { label: "기술 포트폴리오", href: "#portfolio" },
    { label: "기업 문화", href: "#culture" },
    { label: "네트워크", href: "#network" },
    { label: "인재채용", href: "#careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 transition-transform group-hover:rotate-90 duration-300">
            <span className="bg-[#00d8f6] rounded-xs"></span>
            <span className="bg-[#00a8ff] rounded-xs"></span>
            <span className="bg-[#00d8f6] rounded-xs"></span>
            <span className="bg-[#00d8f6] rounded-xs"></span>
          </div>
          <div className="flex items-center text-xl font-bold tracking-tight">
            <span className="text-[#00d8f6]">Hanbit</span>
            <span className="text-white ml-1.5 font-semibold">E&S</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="bg-[#e53e3e] hover:bg-[#f54e4e] text-white text-[14px] font-bold px-6 py-2.5 rounded-[4px] shadow-[0_0_15px_rgba(229,62,62,0.3)] hover:shadow-[0_0_20px_rgba(229,62,62,0.5)] transition-all duration-300"
          >
            문의하기
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-white/5 bg-[#030712] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/5">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#e53e3e] hover:bg-[#f54e4e] text-white text-[14px] font-bold px-6 py-3 rounded-[4px] transition-all"
            >
              문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
