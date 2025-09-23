import { SlidingBackgroundSection } from "@/components/SlidingBackgroundSection";
import { BUSINESS_SECTIONS } from "@/constants/home";

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-y-[17rem]'>
        {BUSINESS_SECTIONS.map((section, i) => (
          <SlidingBackgroundSection key={i} {...section} />
        ))}
      </div>
    </div>
  );
}
