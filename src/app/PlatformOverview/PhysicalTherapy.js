import Image from "next/image";
import React from "react";
import WhiteButton from "../Components/WhiteButton";

function PhysicalTherapy() {
  return (
    <div className="flex flex-wrap ">
      <div className="mx-auto container">
        <div
          className="md:flex mt-[16rem]  md:h-[24rem]   w-[100%] px-6"
          style={{ backgroundColor: "#b8a1c5" }}
        >
          <div className="flex flex-row  ">
            <div className=" flex flex-wrap">
              <Image
                className="rounded-xl h-[29rem] md:w-[100%] mt-[-4rem] "
                src={"/images/therapy1.jpg"}
                width={200}
                height={800}
                alt=""
              />
            </div>

            <div className="flex flex-wrap md:ml-[-4rem]">
              <Image
                className="rounded-xl h-[27rem] md:w-[66%]"
                src={"/images/exercise.jpg"}
                width={200}
                height={800}
                alt=""
              />
            </div>
          </div>
          <div
            className=" text-black  md:w-[70%]"
            style={{ backgroundColor: "#b8a1c5" }}
          >
            <div className="md:w-[70%] w-[100%]  ">
              <div className={`text-[2rem] text-start semiboldfont `}>
                Virtual Physical Therapy
              </div>
              <div className="text-left pt-6 ">
                <p className=" text-[1rem] font-normal  text-start leading-loose ">
                  Embracing the power of technology, Azra Care introduces a
                  virtual physical therapy feature, enhanced by remote
                  therapeutic monitoring (RTM). Our platform enables real-time,
                  personalized feedback, tracking patient progress and ensuring
                  adherence to therapy regimens from the comfort of their homes.
                  By leveraging RTM, we offer accessible and equitable
                  musculoskeletal care, pushing boundaries to achieve superior
                  patient outcomes.
                </p>
              </div>
              <WhiteButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalTherapy;
