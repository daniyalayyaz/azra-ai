import Link from "next/link";
import React from "react";
const TryChathCard = () => {
  return (
    <>
      <div className=" mt-2 mb-[6rem]">
        <div
          className={`h-96 space-y-7 flex items-center justify-center flex-col relative bg-[#60426c] `}
        >
          {/* Space around the background image */}
          <div className="absolute inset-0 bg-transparent container md:mx-auto" />
          <div className="space-y-8 text-center md:px-0 px-2">
            <p className="md:text-[56px] leading-none text-[32px] semiboldfont text-white">
              Ready for Azra Chat?
            </p>
            <p className="md:w-4/5 text-white  md:ml-14 regularfont md:text-lg text-[15px]">
              Harness the knowledge and expertise of Wellen's science-backed
              content about osteoporosis and osteopenia.
            </p>
          </div>
          <div className="md:flex regularfont md:space-y-0 space-y-2 text-xl md:space-x-7">
            <div className="cursor-pointer bg-white text-black border-2 rounded-full px-20 py-4 md:mr-12">
              Try Azra Chat
              <Link href="/chatbot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TryChathCard;
