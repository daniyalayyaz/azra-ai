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
          <div className="flex md:flex-row flex-col space-y-2 md:justify-between justify-center md:mx-[4rem] mt-[4rem] px-6">
            <div className="grid grid-cols  md:w-[100%] ">
              <div className="md:relative">
                <div className="w-[100%] ">
                  <Image
                    className=" rounded-[8px]  shadow-2xl shadow-gray-500"
                    src={"/images/SDOH-icon.png"}
                    width={500}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="md:absolute md:top-[21rem] w-[100%]  md:left-[22rem] " data-aos="slide-right">
                  <DeterminantsCard />
                </div>
              </div>
            </div>
            <div className="text-black  py-4  md:w-2/5 md:mr-[2rem]  ">
              <div
                className={`md:text-[2rem] text-[1rem] text-start mt-6 semiboldfont  w-[90%] md:text-left`}data-aos="fade-in" data-aos-delay="200"
              >
                Social Determinants of Health and Health-Related Social Needs
              </div>
              <div className=" md:text-left text-center pt-4 text-[1rem]" data-aos="fade-in" data-aos-delay="300">
                <p className="md:w-[80%] text-gray-500  regularfont leading-loose text-start ">
                  Azra Care implements systematic screening for health-related
                  social needs, enabling an accurate depiction of social risk in
                  your patient population and also streamlining resources like
                  transportation, food, and housing for those who need it most.
                </p>
                <div className="flex flex-row flex-start mt-[2rem] text-left semiboldfont md:p-2">
                  <span className=" flex flex-row " data-aos="fade-in" data-aos-delay="300">
                    <FontAwesomeIcon
                      className="md:mx-[2rem] mr-4"
                      icon={faFaceSmile}
                      style={{ color: "#60426c" }}
                      width={30}
                    />
                    Prioritizing Patient Satisfaction
                  </span>
                  <span className="flex flex-row md:w-[24rem]" data-aos="fade-in" data-aos-delay="500">
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
              <div data-aos="fade-in" data-aos-delay="300">
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
