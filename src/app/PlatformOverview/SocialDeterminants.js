import SolidButton from "@/app/Components/SolidButton";
import { faFaceSmile, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import DeterminantsCard from "../Components/DeterminantsCard";

function SocialDeterminants() {
  return (
    <>
      <div className="bg-white  ">
        <div className="mx-auto container">
          <div className="flex md:flex-row flex-col space-y-2 md:justify-between  mt-[4rem]">
            <div className="grid grid-cols  place-content-center  md:w-[100%] mx-2 ">
              <div className="md:relative">
                <Image
                  className=" rounded-[8px]  shadow-2xl shadow-gray-500"
                  src={"/images/SDOH-icon.png"}
                  width={500}
                  height={200}
                  alt=""
                />
                <div className="md:absolute top-[21rem] w-[100%] left-[22rem] ">
                  <DeterminantsCard />
                </div>
              </div>
            </div>
            <div className="text-black  py-4  md:w-2/5 mr-[2rem] mx-2">
              <div
                className={`text-[2rem]  text-start semiboldfont  w-[85%] md:text-left`}
              >
                Social Determinants of Health and Health-Related Social Needs
              </div>
              <div className=" md:text-left text-center pt-4 text-[1rem]">
                <p className="w-[80%] text-gray-500  regularfont leading-loose text-start ">
                  Azra Care implements systematic screening for health-related
                  social needs, enabling an accurate depiction of social risk in
                  your patient population and also streamlining resources like
                  transportation, food, and housing for those who need it most.
                </p>
                <div className="md:flex flex-row flex-start mt-[2rem] semiboldfont md:p-2">
                  <span className=" flex flex-row ">
                    <FontAwesomeIcon
                      className="md:mx-[2rem] mr-4"
                      icon={faFaceSmile}
                      style={{ color: "#60426c" }}
                      width={30}
                    />
                    Prioritizing Patient Satisfaction
                  </span>
                  <span className="flex flex-row md:w-[24rem]">
                    <FontAwesomeIcon
                      className="md:mx-[2rem] mr-4"
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
    </>
  );
}

export default SocialDeterminants;
