import Image from "next/image";
import React from "react";
import SolidButton from "../Components/SolidButton";
import WhiteButton from "../Components/WhiteButton";

function PhysicalTherapy() {
  return (
    <div className="flex flex-wrap">
      <div
        className=" flex md:mt-8  h-[24rem] ml-[1rem] w-[250rem]"
        style={{ backgroundColor: "#b8a1c5" }}
      >
        <div className="flex flex-row  ">
          <div className=" flex flex-wrap">
            <Image
              className="rounded-xl h-[28rem] w-[25rem] mt-[-4rem] "
              src={"/images/therapy1.jpg"}
              width={400}
              height={800}
              alt=""
            />
          </div>

          <div className="flex flex-wrap ml-[-4rem]">
            <Image
              className="rounded-xl h-[28rem] w-[25rem]"
              src={"/images/exercise.jpg"}
              width={400}
              height={800}
              alt=""
            />
          </div>
        </div>
        <div
          className=" text-black order-last  w-[60rem] mx-0"
          style={{ backgroundColor: "#b8a1c5" }}
        >
          <div className="pl-8 pr-[10rem]">
            <div className={`text-[2rem] text-start semiboldfont mx-6`}>
              Virtual Physical Therapy
            </div>
            <div className="text-left pt-6">
              <p className="w-[33rem] text-[1rem] font-normal  text-start leading-loose mx-6">
                Embracing the power of technology, Azra Care introduces a
                virtual physical therapy feature, enhanced by remote therapeutic
                monitoring (RTM). Our platform enables real-time, personalized
                feedback, tracking patient progress and ensuring adherence to
                therapy regimens from the comfort of their homes. By leveraging
                RTM, we offer accessible and equitable musculoskeletal care,
                pushing boundaries to achieve superior patient outcomes.
              </p>
            </div>
            <WhiteButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalTherapy;
