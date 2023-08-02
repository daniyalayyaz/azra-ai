import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import SolidButton from "@/app/Components/SolidButton";
import {
  faCommentSms,
  faHandHoldingMedical,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import ChatbotCard from "../Components/ChatbotCard";

const ChatBotCard = () => {
  return (
    <div className="mx-auto container">
      {/* <div
        className=" bg-no-repeat bg-cover bg-left mx-[2rem]"
        style={{ backgroundImage: `url("/images/chatbot-bg.png")` }}
      > */}
      <div className=" flex justify-center md:mx-[6rem] md:mt-[8rem] md:px-[4rem] px-6">
        <div className="md:flex  md:space-y-8 justify-between ">
          <div className="text-black  order-first md:mr-[12rem]  mt-[7rem]">
            <span>
              <FontAwesomeIcon
                icon={faRobot}
                style={{ color: "#60426c", width: "40px", height: "30px" }}
                width={40}
              />
            </span>

            <div
              className={` md:w-[82%] w-[100%] md:text-[2rem] text-[1rem] text-start semiboldfont md:text-left text-center  mt-[2rem]`}
            >
              AI-Powered Conversational Care Concierge Engages Patients By Text
              Messages With Embedded Education Media and Content
            </div>
            <div className=" pt-4 ">
              <p className=" md:w-[90%] w-[100%] text-gray-500 text-[1rem] regularfont text-start text-center md:text-left leading-loose">
                Azra helps you support your patients in preparing for a seamless
                care journey experience, without extra work added to you or your
                staff. Deliver accessible, actionable and always-on
                evidence-based guidance to your patients throughout their care
                journey.
              </p>
              <div className="mt-[2rem]  md:w-[70%]">
                <span>
                  <FontAwesomeIcon
                    className="border-4 rounded-xl bg-white border-white"
                    icon={faHandHoldingMedical}
                    style={{ color: "#60426c" }}
                    width={30}
                  />
                  <h6 className="semiboldfont text-left text-[1rem] order-last mt-[-1.4rem] ml-[3.5rem]">
                    Patient Focused
                  </h6>
                </span>

                <span className="">
                  <FontAwesomeIcon
                    className="border-4 rounded-xl  bg-white border-white mt-[2rem] text-left"
                    icon={faCommentSms}
                    style={{ color: "#60426c" }}
                    width={30}
                  />
                  <h6 className="semiboldfont text-[1rem] order-last mt-[-1.5rem] ml-[3.5rem] text-left">
                    Instant Replies Powered by Our Large Language Model Care
                    Concierge
                  </h6>
                </span>
              </div>
              <SolidButton />
            </div>
          </div>
          <div className="md:grid grid-cols w-[100%] md:mr-[2rem]  md:mr-[-6rem] md:mt-[40rem] mt-[6rem]">
            <div>
              <Image
                className="md:h-[46rem]  shadow-lg  inline-block  shadow-gray-500 rounded-t-[2rem] rounded-r-[2rem]"
                src={"/images/chatbot.png"}
                width={400}
                height={200}
                alt=""
              />
              <div className="md:relative bottom-[9rem] right-[12rem]">
                <ChatbotCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ChatBotCard;
