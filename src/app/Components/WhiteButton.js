import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WhiteButton() {
  return (
    <div
      className="text-center  mt-[2rem] ml-[-30rem]"
      style={{ color: "#60426c" }}
    >
      <button
        className=" border  rounded-xl w-[10em] p-4 justify-between shadow-xl"
        style={{ backgroundColor: "white" }}
      >
        <p className="ml-[-1.4rem] mediumfont">Learn More</p>
        <FontAwesomeIcon
          className="ml-[7rem] mt-[-1.3rem]"
          icon={faArrowRight}
          style={{ color: "#60426c" }}
          width={14}
        />
      </button>
    </div>
  );
}

export default WhiteButton;
