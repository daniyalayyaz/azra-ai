"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import Navbar from "@/app/Components/Navbar";
import ChatBotCard from "./ChatBotCard";
import SocialDeterminants from "./SocialDeterminants";
import PhysicalTherapy from "./PhysicalTherapy";
import AnalyticsCard from "./AnalyticsCard";
import OrthopedicCard from "./OrthopedicCard";
import Footer from "../Components/Footer";
import ContactUs from "./ContactUs";

function MainPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-white ">
      {/* <div
        className="bg-cover bg-center h-[100%] md:h-[80%] w-[100%]  bg-fixed rounded-br-[120px] py-2"
        style={{ backgroundImage: `url("/images/bg.png")` }}
      > */}
      <Navbar />
      <div className="mx-auto container scale-up-ver-top">
        {/* 
          <div className="md:w-[75%] md:mt-[6rem] md:mx-[6rem] px-4">
            <h1
              className="text-white boldfont md:text-[4rem] text-[2.5rem] ml-6"
              data-aos="fade-in"
              style={{ fontFamily: "sans-serif" }}
            >
              The Azra Care Platform
            </h1>
            <p
              className="text-white mt-[2rem] mediumfont text-left mb-[4rem] ml-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              style={{ color: "#DEE1F8" }}
            >
              Azra Care's platform is a pioneering digital health solution that
              leverages artificial intelligence to revolutionize specialty care.
              Our Care Concierge uses large language models informed by
              evidence-based data curated by our clinician specialists,
              providing automated and empathetic responses to patient queries
              throughout their care journey. Our intelligent clinical support
              triage system escalates concerns to your team before they escalate
              into adverse events. By actively addressing healthcare
              disparities, our platform also enhances patient-provider
              relationships, propelling patient outcomes forward while
              simultaneously reducing the burden on healthcare providers.
            </p>
          </div> */}
        {/* </div> */}
      </div>
      <ChatBotCard />
      {/* <SocialDeterminants />
      <PhysicalTherapy />
      <div className="mx-auto container ">
        <div className="md:flex flex-row md:mt-[8rem]  px-6">
          <div data-aos="fade-in" data-aos-delay="300">
          <AnalyticsCard />
          </div>
          <div  data-aos="fade-in" data-aos-delay="600">
          <OrthopedicCard />
          </div>
        </div>
      </div> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default MainPage;
