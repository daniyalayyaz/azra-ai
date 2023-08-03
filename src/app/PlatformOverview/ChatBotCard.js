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
import Link from "next/link";

const ChatBotCard = () => {
  return (
    <div className="mx-auto container">
      {/* <div
        className=" bg-no-repeat bg-cover bg-left mx-[2rem]"
        style={{ backgroundImage: `url("/images/chatbot-bg.png")` }}
      > */}
      <div className=" flex justify-center md:mx-[6rem] md:mt-[4rem] md:px-[4rem] px-6">
        <div className="md:flex  md:space-y-8 justify-between ">
          <div className="text-black  order-last  md:ml-[14rem]  mt-[4rem]">
            <span className="fadeIn1">
              <FontAwesomeIcon
                icon={faRobot}
                style={{ color: "#60426c", width: "40px", height: "30px" }}
                width={40}
              />
            </span>

            <div
              className={` md:w-[82%] w-[100%]  text-start  md:text-left text-center md:text-[56px] leading-none text-[32px] semiboldfont mt-[2rem]`}
              data-aos="fade-in"
            >
              Azra Chat
            </div>
            <div className=" pt-4" data-aos="fade-in" data-aos-delay="200">
              <p className=" md:w-[90%] w-[100%] text-gray-500 regularfont md:text-lg text-[15px] text-start text-center md:text-left leading-loose">
                Azra helps you support your patients in preparing for a seamless
                care journey experience, without extra work added to you or your
                staff. Deliver accessible, actionable and always-on
                evidence-based guidance to your patients throughout their care
                journey.
              </p>
              <div className="mt-[2rem]  md:w-[72%]">
                <span data-aos="fade-in" data-aos-delay="300">
                  <FontAwesomeIcon
                    className="border-4 rounded-xl bg-white border-white"
                    icon={faHandHoldingMedical}
                    style={{ color: "#60426c" }}
                    width={30}
                  />
                  <h6 className="semiboldfont text-left  md:text-[16px] text-[15px] order-last mt-[-1.4rem] ml-[3.5rem]">
                    Patient Focused
                  </h6>
                </span>

                <span data-aos="fade-in" data-aos-delay="300">
                  <FontAwesomeIcon
                    className="border-4 rounded-xl  bg-white border-white mt-[2rem] text-left"
                    icon={faCommentSms}
                    style={{ color: "#60426c" }}
                    width={30}
                  />
                  <h6 className="semiboldfont  md:text-[16px] text-[15px] order-last mt-[-1.5rem] ml-[3.5rem] text-left">
                    Instant Replies Powered by Our Large Language Model Care
                    Concierge
                  </h6>
                </span>
              </div>
              <div data-aos="fade-in" data-aos-delay="100">
                <Link href="/chatbot">
                  <SolidButton />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols w-[100%] md:mr-[2rem]  md:mr-[-6rem] md:mt-[40rem] mt-[6rem]">
            <div>
              <Image
                className="md:h-[40rem]  shadow-lg  inline-block  shadow-gray-500 rounded-t-[2rem] rounded-r-[2rem]"
                src={"/images/chatbot.png"}
                width={400}
                height={200}
                alt=""
              />
              <div
                className="md:relative bottom-[9rem] left-[8rem]"
                // data-aos="slide-right"
              >
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
