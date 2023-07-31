import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import QuoteCard from "../Components/QuoteCard";
import SolidButton from "@/app/Components/SolidButton";
import {
  faCommentSms,
  faHandHoldingMedical,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const ChatBotCard = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto container">
        <div className=" flex justify-center  ">
          <div className="flex   justify-between  p-[3em]   ">
            <div className="text-black w-[31.1rem] order-first mr-[12rem] mt-[46rem] ">
              <span>
                <FontAwesomeIcon
                  icon={faRobot}
                  style={{ color: "#60426c" }}
                  width={40}
                />
              </span>
              <div
                className={`text-[2rem] text-start semiboldfont text-left  mt-[2rem]`}
              >
                AI-Powered Conversational Care Concierge Engages Patients By
                Text Messages With Embedded Education Media and Content
              </div>
              <div className="text-center pt-4 ">
                <p className="w-[33rem] text-gray-500 text-[1rem] regularfont text-start text-left leading-loose">
                  Azra helps you support your patients in preparing for a
                  seamless care journey experience, without extra work added to
                  you or your staff. Deliver accessible, actionable and
                  always-on evidence-based guidance to your patients throughout
                  their care journey.
                </p>
                <div className="mt-[2rem]  w-[28rem]">
                  <span>
                    <FontAwesomeIcon
                      className="border-4 rounded-xl bg-white border-white"
                      icon={faHandHoldingMedical}
                      style={{ color: "#60426c" }}
                      width={30}
                    />
                    <h6 className="semiboldfont text-[1rem] order-last mt-[-1.4rem] ml-[-13rem]">
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
            <div className="grid grid-cols w-[30rem] ml-[8rem]  mr-[-6rem] mt-[40rem]">
              <div className="">
                <Image
                  className="h-[46rem]  shadow-lg  inline-block  shadow-gray-500 rounded-t-[2rem] rounded-r-[2rem]"
                  src={"/images/chatbot.png"}
                  width={400}
                  height={200}
                  alt=""
                />
                {/* <div className="mr-[240px] mt-[-140px] left-[-1px]">
                  <QuoteCard />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotCard;
