import Image from "next/image";
import React from "react";

function OrthopedicCard() {
  return (
    <div className="mx-auto container">
      <div className="text-center  mt-[8rem]  md:ml-[6rem]">
        <div className=" grid md:grid-cols-2   place-items-center ">
          <div className=" rounded-xl border-2 shadow-2xl">
            <div className="md:w-[36rem] md:h-[35rem]">
              <Image
                src={"/images/Orthopedic-model.jpg"}
                className="rounded-xl h-[17rem]"
                height={300}
                width={700}
                alt=""
              />
              <p className=" md:text-left text-center text-[1.5rem] semiboldfont mb-2 mt-5 md:px-[40px] px-4">
                Care Models for Orthopaedic and Musculoskeletal Care
              </p>
              <p className="text-gray-500 text-[16px] font-normal md:text-left text-center md:px-[40px] mt-4 px-4 leading-loose">
                Azra Care emphasizes care models for orthopaedic surgeons for
                conditions like knee and hip osteoarthritis, osteoporosis, and
                fracture care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrthopedicCard;
