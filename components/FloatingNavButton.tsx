"use client";

import { useState } from "react";
import Link from "next/link";
import { headerLinks } from "@/constants/layout";

export default function FloatingNavButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:hidden fixed bottom-6 right-6 z-50'>
      {/* Navigation Menu */}
      <div className={`absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <nav className='py-2 min-w-[250px]'>
          {headerLinks.map((link, index) => (
            <Link key={link.href} href={link.href} className='block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm border-b border-gray-100 last:border-b-0' onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Floating Action Button */}
      <button onClick={toggleMenu} className={`w-14 h-14 bg-gray-600 hover:bg-gray-700 border-white border-2 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center ${isOpen ? "rotate-90" : "rotate-0"}`} aria-label='Toggle navigation menu'>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          {isOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />}
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && <div className='fixed inset-0 bg-black bg-opacity-20 -z-10' onClick={() => setIsOpen(false)} />}
    </div>
  );
}
