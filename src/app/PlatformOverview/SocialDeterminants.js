import SolidButton from "@/app/Components/SolidButton";
import { faFaceSmile, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function SocialDeterminants() {
  return (
    <>
      <div className="bg-white  ">
        <div className="mx-auto container">
          <div className=" flex justify-center ">
            <div className="md:flex  space-y-2 justify-between  p-[3em] mt-[4rem]">
              <div className="grid grid-cols gap-3  ml-12  w-[100%]  ">
                <div className="w-full h-auto md:w-1/2 lg:w-1/3">
                  {/* The parent div will adjust the width of the image based on the screen size */}
                  <Image
                    className="rounded-8 shadow-xl shadow-gray-400 object-cover w-full h-full"
                    src={"/images/bg.png"}
                    width={500}
                    height={200}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-black  order-last  py-4  md:w-2/5 mr-[2rem]">
                <div
                  className={`text-[2rem]  text-start semiboldfont  w-[100%] text-left`}
                >
                  Social Determinants of Health and Health-Related Social Needs
                </div>
                <div className=" text-left pt-4 text-[1rem]">
                  <p className="w-[80%] text-gray-500  regularfont leading-loose text-start ">
                    Azra Care implements systematic screening for health-related
                    social needs, enabling an accurate depiction of social risk
                    in your patient population and also streamlining resources
                    like transportation, food, and housing for those who need it
                    most.
                  </p>
                  <div className="md:flex flex-row flex-start mt-[2rem] semiboldfont p-2">
                    <span className=" flex flex-row ">
                      <FontAwesomeIcon
                        className="mx-[2rem]"
                        icon={faFaceSmile}
                        style={{ color: "#60426c" }}
                        width={30}
                      />
                      Prioritizing Patient Satisfaction
                    </span>
                    <span className="flex flex-row w-[24rem]">
                      <FontAwesomeIcon
                        className="mx-[2rem]"
                        icon={faHeart}
                        style={{ color: "#60426c" }}
                        width={30}
                      />
                      Striving for Equitable Care
                    </span>
                  </div>
                </div>
                <SolidButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialDeterminants;
