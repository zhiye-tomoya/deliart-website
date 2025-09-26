"use client";

import Link from "next/link";
import Image from "next/image";
import { footerLinks, policyLinks } from "@/constants/layout";
import { Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-neutral-900 text-gray-300 text-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10'>
        {/* Top Row */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between border-t pt-[2.5rem] border-gray-700 pb-6 mb-6'>
          {/* Logo */}

          <div className='flex flex-col gap-y-4'>
            <Link href='/' className='text-2xl font-light tracking-widest text-white'>
              <Image src='/logo.svg' alt='DeliArt Logo' width={120} height={40} />
            </Link>
            {/* Social */}
            <div className='flex space-x-4 text-xl'>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
                <Youtube className='h-4 w-4' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <Instagram className='h-4 w-4' />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <nav className='flex flex-col md:flex-row flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0'>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className='hover:text-white transition-colors'>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Contact Button */}
        <div className='hidden md:flex md:mb-0'>
          <div className='flex w-full justify-end'>
            <Link href='/contact' className='flex justify-between items-center md:gap-32 border border-gray-400 px-8 py-4 rounded-md hover:border-white hover:text-white transition-colors'>
              お問い合わせ
              <div className='group relative flex items-center justify-center w-6 h-6'>
                {/* 白丸 */}
                <div className='bg-white rounded-full w-3 h-3 transition-transform duration-300 group-hover:scale-200 flex items-center justify-center'>
                  {/* 黒丸 */}
                  <div className='w-[2px] h-[2px] bg-black rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100'></div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Social + Address */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6'>
          {/* Address */}
          <p className='flex flex-col md:flex-row md:gap-2 text-gray-400'>
            <span className='font-bold'>住所: 〒101-0054 </span>
            <span className='font-bold'>東京都千代田区神田錦町3-15</span>
            <span>名鉄不動産竹橋ビル3F</span>
          </p>
        </div>

        {/* Policy Links */}
        <div className='border-t border-gray-700 pt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400'>
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href} className='hover:text-white transition-colors'>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className='mt-6 text-center text-xs text-gray-500'>Copyright ©2025 DeliArt Co.,Ltd. All rights reserved.</div>
      </div>
    </footer>
  );
}
