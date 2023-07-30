import Image from "next/image";
import React from "react";

function Card() {
  return (
    <div className="card">
      {/* <Image src={"/images/growtify.png"} alt=" " /> */}
      <div className="card-content">
        <h3>Value Transformation in Specialty Care</h3>
        <p>
          More than 60% of health care payments in 2020 included quality and
          value based components. Azra designs domain-specific care models with
          you to maximize specialty care value performance.
        </p>
      </div>
    </div>
  );
}

export default Card;
