import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DeterminantsCard() {
  return (
    <div className="container ">
      <span
        className="flex flex-row flex-start border-2 rounded-xl w-[26%] p-8 "
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
          Azra Care programs include holistic approaches to osteoporosis,
          pre-operative optimization for total hip and total knee arthroplasty,
          and population health approaches to care
        </p>
      </span>
    </div>
  );
}

export default DeterminantsCard;
