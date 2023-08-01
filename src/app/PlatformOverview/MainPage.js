import Navbar from "@/app/Components/Navbar";
import ChatBotCard from "./ChatBotCard";
import SocialDeterminants from "./SocialDeterminants";
import PhysicalTherapy from "./PhysicalTherapy";
import AnalyticsCard from "./AnalyticsCard";
import OrthopedicCard from "./OrthopedicCard";
import Footer from "../Components/Footer";
import ContactUs from "./ContactUs";
function MainPage() {
  return (
    <div className="bg-white ">
      <div
        className="bg-cover bg-center h-[100%] md:h-[80%] w-[100%]  bg-fixed rounded-br-[120px] py-2"
        style={{ backgroundImage: `url("/images/bg.png")` }}
      >
        <div className="mx-auto container">
          <Navbar />
          <div className="md:w-[75%] md:mt-[6rem] md:mx-[6rem] px-4">
            <h1
              className="text-white boldfont md:text-[4rem] text-[2.5rem] ml-6"
              style={{ fontFamily: "sans-serif" }}
            >
              The Azra Care Platform
            </h1>
            <p
              className="text-white mt-[2rem] mediumfont text-left mb-[4rem] ml-6"
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
          </div>
        </div>
      </div>
      <ChatBotCard />
      <SocialDeterminants />
      <PhysicalTherapy />
      <div className="mx-auto container">
        <div className="md:flex flex-row md:mt-[8rem]  px-6">
          <AnalyticsCard />
          <OrthopedicCard />
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default MainPage;
