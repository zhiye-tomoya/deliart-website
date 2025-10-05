import { inter, notoSerifJP } from "@/lib/fonts";
import { HERO } from "@/constants/hotelOperation";

export const HeroSection = () => {
  return (
    <div className='relative w-full h-screen'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img src='/hotel-operation-hero.jpg' alt='Hotel Operation Hero' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Overlay Text */}
      <div className={`${notoSerifJP.className} relative z-10 flex flex-col items-start justify-center h-full md:px-[14rem] lg:px-[20rem] text-white`}>
        <h2 className='md:text-lg mb-6'>ホテルオペレーション事業</h2>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest mb-[6rem] whitespace-pre-line'>HOTEL{"\n"}OPERATION</h1>
        <div className='flex flex-col gap-6'>
          <h3 className={`${inter.className} text border-b pb-2`}>株式会社デリ・アートHR</h3>
          <p className='text-4xl font-medium'>{"おもてなしの心で、特別なひとときを。"}</p>
          <p className={`text-lg md:text-xl max-w-3xl whitespace-pre-line`}>{HERO.MAIN_MESSAGE_BODY}</p>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
