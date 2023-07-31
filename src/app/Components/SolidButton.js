import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SolidButton() {
  return (
    <div className="text-center text-white mt-[2rem] ml-[-20rem] regularfont">
      <button
        className=" border  rounded-xl w-[10em] p-4 justify-between shadow-xl shadow-purple-200"
        style={{ backgroundColor: "#60426c" }}
      >
        <p className="ml-[-1.4rem]">Get In Touch</p>
        <FontAwesomeIcon
          className="ml-[7rem] mt-[-1.3rem]"
          icon={faArrowRight}
          style={{ color: "white" }}
          width={14}
        />
      </button>
    </div>
  );
}

export default SolidButton;
