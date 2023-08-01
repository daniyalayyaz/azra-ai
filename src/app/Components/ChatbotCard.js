import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ChatbotCard() {
  return (
    <div className="container ">
      <span
        className="flex flex-row flex-start border-2 rounded-xl w-[24.4rem] p-8 "
        style={{ backgroundColor: "#d0eae1", border: "#d0eae1" }}
      >
        <FontAwesomeIcon
          className="border-4 rounded-full   mr-[1rem] text-left "
          icon={faQuoteLeft}
          style={{ color: "#60426c", backgroundColor: "white" }}
          width={150}
          height={40}
        />
        <p className=" text-gray">
          Azra's AI chatbot is equity-focused and evidence based to boost
          patient engagement and bolster patient outcomes in specialty care.
        </p>
      </span>
    </div>
  );
}

export default ChatbotCard;
