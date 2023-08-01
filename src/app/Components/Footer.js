import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <footer className="bg-white pb-4" style={{ backgroundColor: "#d0eae1" }}>
        <div className="pt-4 sm:pt-10 lg:pt-12 pb-12 md:px-16 ">
          <div className="max-w-screen-3xl px-4 mx-auto ">
            <div className=" md:flex  mt-6">
              <div className="border w-[100%] border-black mb-2"></div>
            </div>
            {/* Grid Start */}
            <div className="mx-auto container">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4  pt-10 lg:pt-20">
                <div className="lg:-mt-2 mb-4">
                  <Image
                    src={"/images/logo2.png"}
                    alt=""
                    width={194}
                    height={32}
                  />

                  <p className="text-gray-600  text-[16px] font-normal mt-6 leading-loose">
                    Azra empowers specialty providers to transition to
                    value-based care to enable personalized, convenient,
                    equity-focused whole person care for our underserved
                    communities.
                  </p>
                </div>
                <div className="lg:-mt-2 mb-4 md:ml-[4rem]">
                  <div className="text-[20px] regularfont">Quick Links</div>
                  <ul className="mt-6 leading-loose">
                    <li>Platform Overview</li>
                  </ul>
                </div>
                <div className="lg:-mt-2 mb-4">
                  <div className="text-[20px] regularfont">Important Links</div>
                  <ul className="mt-6 leading-loose">
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Informed Consent Cancellation Policy</li>
                  </ul>
                </div>
                <div className="lg:-mt-2 mb-4">
                  <div className="text-[20px] regularfont"> Let's Connect!</div>
                  <p className="text-gray-600 sm:pr-8 text-[16px] font-normal mt-6 leading-loose">
                    Connect with our team to supercharge your care pathways for
                    value-based care. Collaborate with us on research, digital
                    health platform development, and more!
                  </p>
                  <div className="flex flex-row p-4 gap-4">
                    <div
                      className="border-8 rounded-full"
                      style={{
                        borderColor: "#60426c",
                        backgroundColor: "#60426c",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{
                          color: "#d0eae1",
                        }}
                        width={16}
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        className="border-8 rounded-full"
                        icon={faTwitter}
                        style={{
                          color: "#d0eae1",
                          borderColor: "#60426c",
                          backgroundColor: "#60426c",
                        }}
                        width={35}
                      />
                    </div>
                  </div>
                  {/* <Link className=" text-black-500 hover:text-purple-800 active:text-purple-600 transition duration-100">
                  <div className="md:w-[14rem]">
                    <FontAwesomeIcon icon={faLinkedinIn} /> 
                  </div>
                </Link> */}
                </div>
              </div>
            </div>
          </div>

          <div className=" md:flex  mt-6">
            <div className="border w-[100%] border-black mb-2"></div>
          </div>
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto text-base ">
            <div className="flex flex -row justify-between items-center gap-4 ">
              <span className="text-black ">
                <span className=" mr-1.5"> Copyright &copy;</span>| 2023 Azra
                Care | All rights reserved.
              </span>

              <div className="flex items-right gap-4">Powered by WebTech</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
