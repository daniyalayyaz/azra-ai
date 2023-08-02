import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WhiteButton() {
  return (
    <div className=" mt-[2rem] " style={{ color: "#60426c" }}>
      <button
        className=" border  rounded-xl w-[10em] p-4 justify-left shadow-xl"
        style={{ backgroundColor: "white" }}
      >
        <div className="flex flex-row place-items-center justify-center space-x-2">
          <p className=" mediumfont text-center ">Learn More</p>
          <FontAwesomeIcon
            className="ml-[7rem] "
            icon={faArrowRight}
            style={{ color: "#60426c" }}
            width={14}
          />
        </div>
      </button>
    </div>
  );
}

export default WhiteButton;
