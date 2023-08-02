import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SolidButton() {
  return (
    <div className=" text-white mt-[2rem]  regularfont ">
      <button
        className=" border  rounded-xl w-[10em] p-4 justify-left shadow-xl shadow-purple-200"
        style={{ backgroundColor: "#60426c" }}
      >
        <div className="flex flex-row place-items-center justify-center space-x-2">
          <p className="text-center">Get In Touch</p>
          <FontAwesomeIcon
            className="ml-[7rem]"
            icon={faArrowRight}
            style={{ color: "white" }}
            width={14}
          />
        </div>
      </button>
    </div>
  );
}

export default SolidButton;
