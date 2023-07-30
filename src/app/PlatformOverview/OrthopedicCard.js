import Image from "next/image";
import React from "react";

function OrthopedicCard() {
  return (
    <div className="mx-auto container">
      <div className="text-center  mt-[8rem] ml-[2rem]">
        <div className=" grid md:grid-cols-2 gap-8  place-items-center ">
          <div className=" rounded-xl border-2 ">
            <div className="md:w-[36rem] md:h-[35rem]">
              <Image
                src={"/images/Orthopedic-model.jpg"}
                className="rounded-xl h-[17rem]"
                height={300}
                width={700}
                alt=""
              />
              <p className=" text-left text-[1.5rem] font-semibold mb-2 mt-5 px-[40px]">
                Care Models for Orthopaedic and Musculoskeletal Care
              </p>
              <p className="text-gray-500 text-[16px] font-normal text-left px-[40px] mt-4 leading-loose">
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
