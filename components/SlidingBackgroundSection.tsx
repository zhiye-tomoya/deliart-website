"use client";
import { inter, notoSerifJP } from "@/lib/fonts";
import { ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

interface SlidingBackgroundSectionProps {
  BACKGROUND_IMAGES: string[];
  MAIN_TITLE: string;
  SUBTITLE: string;
  COMPANY_INFO?: string;
  MAIN_MESSAGE_TITLE: string;
  MAIN_MESSAGE_BODY: string;
  CONTENT_TITLE: string;
  CONTENT_ITEMS: string[];
  CTA_TEXT: string;
}

export const SlidingBackgroundSection: React.FC<SlidingBackgroundSectionProps> = ({ BACKGROUND_IMAGES, MAIN_TITLE, SUBTITLE, COMPANY_INFO, MAIN_MESSAGE_TITLE, MAIN_MESSAGE_BODY, CONTENT_TITLE, CONTENT_ITEMS, CTA_TEXT }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [BACKGROUND_IMAGES.length]);

  return (
    <div className='pl-[25%] pt-[10%] min-h-screen w-full relative'>
      {/* Background Images - positioned to start from left margin and extend bottom to cover CTA button */}
      <section className='absolute top-[20%] left-[25%] right-0 bottom-[-50%] overflow-hidden z-0'>
        <div className='absolute inset-0'>
          {BACKGROUND_IMAGES.map((image: string, index: number) => (
            <div
              key={index}
              className={`absolute h-full w-full inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url(/image${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className='absolute top-0 left-0 h-full w-[10%] flex flex-col items-center justify-start py-8 z-10'>
        {/* Top dot */}
        <div className='w-2 h-2 bg-white rounded-full mb-4'></div>

        {/* BUSINESS text - vertical writing */}
        <div
          className='text-white text-sm font-extrabold mb-8'
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            letterSpacing: "0.2em",
          }}
        >
          BUSINESS
        </div>

        {/* Japanese text - rotated 90 degrees */}
        <div
          className='text-white w-[70px] text-sm font-medium transform rotate-90'
          style={{
            fontFamily: "Noto Sans JP, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          事業紹介
        </div>
      </div>

      {/* Content */}
      <div className='absolute z-20 top-[17%] left-[10%] text-white'>
        <div className='px-6 pb-80'>
          {/* Main Title */}
          <h1 className={`${inter.className} text-7xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-[-0.02em]`}>
            {MAIN_TITLE.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>

          <div className='max-w-4xl'>
            {/* Subtitle */}
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
              <p className='text-md font-bold mb-8 tracking-[0.15em]'>{SUBTITLE}</p>
            </div>

            {/* Company Info */}
            {COMPANY_INFO && (
              <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <p className='text-lg font-semibold mb-16 tracking-[0.1em]'>
                  <span className='pb-2 border-b'>{COMPANY_INFO}</span>
                </p>
              </div>
            )}

            {/* Main Message */}
            <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <h2 className={`${notoSerifJP.className} text-xl md:text-3xl font-light mb-8 leading-tight`}>{MAIN_MESSAGE_TITLE}</h2>
              <p className='text-base md:text-sm font-semibold leading-relaxed mb-16 max-w-lg' style={{ fontFamily: "Noto Sans JP, sans-serif", lineHeight: "1.8" }}>
                {MAIN_MESSAGE_BODY}
              </p>
            </div>

            {/* Content Menu */}
            <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className='mb-12'>
                <h3 className={`${inter.className} text-xs font-medium tracking-[0.3em] mb-8`}>{CONTENT_TITLE}</h3>

                <div className='space-y-6 md:w-[400px]'>
                  {CONTENT_ITEMS.map((item, index) => (
                    <div key={index} className='group cursor-pointer'>
                      <div className='flex items-center justify-between py-4 border-b border-gray-700 hover:border-gray-500 transition-colors duration-300'>
                        <span className='text-sm font-light tracking-[0.05em] group-hover:text-amber-300 transition-colors duration-300'>{item}</span>
                        <ChevronRight className='w-4 h-4 group-hover:text-amber-300 group-hover:translate-x-1 transition-all duration-300' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className='group flex items-center space-x-3 px-8 py-4 border border-gray-600 hover:border-amber-300 hover:bg-amber-300/10 transition-all duration-300 backdrop-blur-sm'>
                <span className='text-sm font-light tracking-[0.05em] group-hover:text-amber-300 transition-colors duration-300'>{CTA_TEXT}</span>
                <div className='w-2 h-2 rounded-full bg-amber-300 group-hover:scale-125 transition-transform duration-300 animate-caret-blink' style={{ animationDuration: "3s" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
