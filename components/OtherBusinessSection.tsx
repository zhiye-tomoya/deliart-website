import Image from "next/image";
import { inter, notoSerifJP } from "@/lib/fonts";
import { Separator } from "@/components/ui/separator";

export const OtherBusinessSection = () => {
  return (
    <div className='px-[6rem]'>
      <h1 className={`${inter.className} text-6xl font-bold tracking-widest`}>OTHER BUSINESS</h1>
      <Separator className='my-8' />
      <div className='grid grid-cols-5 gap-[2rem] px-[2rem] mb-[10rem]'>
        <div>
          <Image src='/image/hotel-operation-content1.jpg' width={500} height={500} alt='Hotel Operation Content 1' className='w-full h-auto object-cover' />
          <div className='my-4'>
            <h3 className={`${inter.className} text-sm font-medium`}>HOTEL OPERATION</h3>
            <h3 className={`${notoSerifJP.className} text-sm font-light`}>ホテル運営事業</h3>
          </div>
          <button className={`${notoSerifJP.className} w-full group flex items-center space-x-3 px-4 py-2 border-2 rounded-md border-gray-600 hover:border-amber-300 hover:bg-amber-300/10 transition-all duration-300 backdrop-blur-sm`}>
            <span className='text-sm font-light tracking-[0.05em] group-hover:text-amber-300 transition-colors duration-300'>サービス詳細</span>
            <div className='w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-300 animate-caret-blink' style={{ animationDuration: "3s" }} />
          </button>
        </div>
      </div>
    </div>
  );
};
