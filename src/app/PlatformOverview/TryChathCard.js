import React from "react";
const TryChathCard = () => {
  return (
    <>
      <div className=" mt-2">
        <div
          className={`h-96 space-y-7 flex items-center justify-center flex-col relative bg-[#60426c] `}
        >
          {/* Space around the background image */}
          <div className="absolute inset-0 bg-transparent container md:mx-auto" />
          <div className="space-y-8 text-center md:px-0 px-2">
            <p className="md:text-5xl text-3xl semiboldfont text-white">
              Ready for Azra Chat?
            </p>
            <p className="md:w-4/5 text-white regularfont md:ml-14 md:text-lg">
              Harness the knowledge and expertise of Wellen's science-backed
              content about osteoporosis and osteopenia.
            </p>
          </div>
          <div className="md:flex regularfont md:space-y-0 space-y-2 text-xl md:space-x-7">
            <button className="bg-white text-black border-2 rounded-full px-20 py-4 md:mr-12">
              Try Azra Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TryChathCard;
