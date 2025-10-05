import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { FEATURE_SECTION } from "@/constants/hotelOperation";
import { notoSerifJP } from "@/lib/fonts";
import { OtherBusinessSection } from "@/components/OtherBusinessSection";

export default function HotelOperation() {
  return (
    <div className='min-h-screen bg-[rgb(51,51,51)] text-white'>
      <HeroSection />
      <div className='p-20'>
        <div className='grid grid-cols-7 mb-[10rem]'>
          <div className='col-span-1 font-semibold'>
            <div>FEATURE</div>
            <div>私たちの特徴</div>
          </div>
          <div className='col-span-2 w-[300px]'>
            <Image src='/image/hotel-operation-content1.jpg' width={500} height={500} alt='Hotel Operation Content 1' className='w-full h-auto object-cover' />
            <div className={`${notoSerifJP.className} mt-8`}>
              <h3 className={`text-lg md:text-xl`}>{FEATURE_SECTION[0].title}</h3>
              <p className='mt-2 text-sm md:text-lg'>{FEATURE_SECTION[0].description}</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-[5rem] px-[2rem] mb-[10rem]'>
          <div className='col-span-1 font-semibold'>
            <div>OUR SERVICE</div>
            <div>取扱サービス</div>
          </div>
          <div className='col-span-3 border-b'>
            <Image src='/image/hotel-operation-content1.jpg' width={500} height={500} alt='Hotel Operation Content 1' className='w-full h-auto object-cover' />
            <div className={`${notoSerifJP.className} mt-8`}>
              <h3 className={`text-lg md:text-xl`}>{FEATURE_SECTION[0].title}</h3>
            </div>
          </div>

          <div className='col-span-3 border-b'>
            <Image src='/image/hotel-operation-content1.jpg' width={500} height={500} alt='Hotel Operation Content 1' className='w-full h-auto object-cover' />
            <div className={`${notoSerifJP.className} mt-8`}>
              <h3 className={`text-lg md:text-xl`}>{FEATURE_SECTION[0].title}</h3>
            </div>
          </div>

          <div className='col-span-1'></div>
          <div className='col-span-3 border-b'>
            <Image src='/image/hotel-operation-content1.jpg' width={500} height={500} alt='Hotel Operation Content 1' className='w-full h-auto object-cover' />
            <div className={`${notoSerifJP.className} mt-8`}>
              <h3 className={`text-lg md:text-xl`}>{FEATURE_SECTION[0].title}</h3>
            </div>
          </div>

          <div className='col-span-7'>
            <div className='grid grid-cols-7'>
              <div className='col-span-1'></div>
              <button className={`${notoSerifJP.className} group flex items-center space-x-3 px-8 py-4 border border-gray-600 hover:border-amber-300 hover:bg-amber-300/10 transition-all duration-300 backdrop-blur-sm`}>
                <span className='text-sm font-light tracking-[0.05em] group-hover:text-amber-300 transition-colors duration-300'>サービス詳細</span>
                <div className='w-2 h-2 rounded-full bg-amber-300 group-hover:scale-125 transition-transform duration-300 animate-caret-blink' style={{ animationDuration: "3s" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <OtherBusinessSection />
    </div>
  );
}
