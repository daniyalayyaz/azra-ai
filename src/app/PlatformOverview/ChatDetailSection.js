import React from "react";
import Image from "next/image";
import Link from "next/link";

function ChatDetailSection() {
  return (
    <div className=" mx-auto container ">
      <div className="md:bg-white bg-slate-200 rounded-xl md:p-0 p-6">
        <div className="flex justify-center lg:flex-row flex-col md:mx-0 mx-2 ">
          <div className="md:w-1/2 w-full  md:mt-12">
            <div className="md:hidden w-full h-full">
              <Image
                src={"/images/chatbootdetail.jpg"}
                className="rounded-lg"
                height={500}
                width={500}
                alt=""
              ></Image>
            </div>
            <div className="md:px-[4rem] md:space-y-10 space-y-5 md:bg-none bg-white px-5 md:py-0 py-4 ">
              <h1 className="md:text-[56px] leading-none text-[32px] semiboldfont mb-8 mt-3 ">
                Why Azra Chat?
              </h1>
              <div className="space-y-2">
                <h1 className="text-[#60426c] md:text-[25px] text-[20px] md:mediumfont semiboldfont">
                  Your questions answered
                </h1>
                <p className="regularfont md:text-lg text-[15px]">
                  Leverage AI-powered technology to get answers to all your
                  questions related to bone health.
                </p>
              </div>
              <div className="space-y-2">
                <h1 className="text-[#60426c] md:text-[25px] text-[20px] md:mediumfont semiboldfont">
                  Easy-to-use chat
                </h1>
                <p className="regularfont md:text-lg text-[15px]">
                  Access Wellen's expert information through a simple,
                  user-friendly chat interface available 24/7 on multiple
                  devices.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <Image
              src={"/images/chatbootdetail.jpg"}
              className="hidden md:block float-right rounded-r-lg"
              height={500}
              width={500}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDetailSection;
