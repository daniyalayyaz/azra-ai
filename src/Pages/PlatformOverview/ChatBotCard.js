import Image from "next/image";
import React from "react";

const ChatBotCard = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto container">
        <div className=" flex justify-center  ">
          <div className="flex  space-y-2 justify-between  md:p-[3em] mx-[6rem]">
            <div className="text-black md:w-3/5 order-first md:mr-12 px-4 p-[6.6rem]">
              <div className={`text-[2.4rem] text-start font-semibold  `}>
                AI-Powered Conversational Care Concierge Engages Patients By
                Text Messages With Embedded Education Media and Content
              </div>
              <div className="text-center pt-4 text-1sm">
                <p className="w-[34rem] text-gray-500 md:text-base font-normal text-start md:block hidden">
                  Azra helps you support your patients in preparing for a
                  seamless care journey experience, without extra work added to
                  you or your staff. Deliver accessible, actionable and
                  always-on evidence-based guidance to your patients throughout
                  their care journey.
                </p>
                <p>Patient Focused</p>
                <p>
                  Instant Replies Powered by Our Large Language Model Care
                  Concierge
                </p>
              </div>
            </div>
            <div className="grid grid-cols gap-3  md:ml-12 md:block hidden w-[30rem]">
              <div className="mb-3 ">
                <Image
                  className="h-[46rem]"
                  src={"/images/screen.png"}
                  width={400}
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sm:max-w-sm block mx-4 sm:hidden">
          <div className="flex justify-center items-center">
            <Image src={"/images/screen.png"} width={260} height={200} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChatBotCard;
