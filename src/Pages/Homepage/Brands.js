import SolidButton from "@/Components/SolidButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Brands() {
  return (
    <div className="mx-auto container">
      <div className="flex flex-wrap flex-row mt-[4rem]">
        <Image
          src={"/images/growtify.png"}
          width={194}
          height={32}
          alt=""
        ></Image>

        <Image
          className="ml-[10rem]"
          src={"/images/forecastr.png"}
          width={194}
          height={32}
          alt=""
        ></Image>

        <Image
          className="ml-[10rem]"
          src={"/images/techbox.png"}
          width={194}
          height={32}
          alt=""
        ></Image>

        <Image
          className="ml-[10rem]"
          src={"/images/smarthome.png"}
          width={194}
          height={32}
          alt=""
        ></Image>
      </div>
      <p className="text-black font-semibold mx-[6rem] text-[2.8rem] text-center font-sans">
        AI and LLMs for Intelligent Clinical Support with a Population Health
        Focus, Designed and Curated by Healthcare Providers
      </p>
      <SolidButton />
    </div>
  );
}

export default Brands;
