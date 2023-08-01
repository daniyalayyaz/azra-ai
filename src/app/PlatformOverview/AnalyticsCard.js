import Image from "next/image";
import React from "react";

function AnalyticsCard() {
  return (
    <div className="mx-auto container">
      <div className="text-center  mt-[8rem] md:ml-[19rem]  ">
        <div className=" grid md:grid-cols-2  place-items-center ">
          <div className=" rounded-xl border-2 shadow-2xl ">
            <div className="md:w-[36rem] md:h-[35rem]">
              <Image
                src={"/images/analytics.jpg"}
                className="rounded-xl "
                height={420}
                width={700}
                alt=""
              />
              <div className="border-2 rounded-lg"></div>
              <p className=" md:text-left text-center text-[1.5rem] semiboldfont mb-2 mt-5 md:px-[40px] px-4">
                Advanced Analytics to Bolster Value Based Care
              </p>
              <p className="text-gray-500 text-[16px] font-normal md:text-left text-center md:px-[40px] mt-4 px-4 leading-loose">
                We leverage advanced analytics to enhance value-based care. By
                harnessing data-driven insights, we're able to improve patient
                outcomes, synchronize care coordination, and optimize healthcare
                expenditures, aligning with the core principles of value-based
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
