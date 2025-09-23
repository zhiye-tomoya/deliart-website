export const VerticalNavigation = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-[10%] flex flex-col items-center justify-start py-8'>
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
        className='text-white text-sm font-medium transform rotate-90'
        style={{
          fontFamily: "Noto Sans JP, sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        事業紹介
      </div>
    </div>
  );
};
